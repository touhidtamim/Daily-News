import clientPromise from "@/lib/mongodb";

export async function GET(req) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const news = await db
      .collection("news")
      .find({})
      .sort({ publishDate: -1 })
      .toArray();

    return new Response(JSON.stringify(news), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function POST(req) {
  try {
    const client = await clientPromise;
    const db = client.db();

    const data = await req.json();
    // Optional: validation check
    if (!data.title || !data.content) {
      return new Response(
        JSON.stringify({ error: "Title and content required" }),
        { status: 400 }
      );
    }

    const result = await db.collection("news").insertOne(data);

    return new Response(
      JSON.stringify({
        message: "News added successfully",
        id: result.insertedId,
      }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
