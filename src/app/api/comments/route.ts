import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const url = process.env.COMMENTS_LINK;
  const key = process.env.YOUTUBE_KEY;
  const getUrl = new URL(req.url);
  const getParams = new URLSearchParams(getUrl.searchParams);
  const videoId = getParams.get("id");

  if (!url || !key) throw new Error("Error setup variables");

  let loopHandler: string | undefined = "start";
  let list: any = [];
  while (loopHandler) {
    if (loopHandler === "start") {
      const fetchData = await fetch(
        `${url}?part=snippet&maxResults=100&videoId=${videoId}&key=${key}`
      );
      const result = await fetchData.json();
      if (!result) {
        loopHandler = undefined;
        throw new Error("Error setup variables");
      }
      result.items.map((item: any) => {
        list.push({
          user: item.snippet.topLevelComment.snippet.authorDisplayName,
          comment: item.snippet.topLevelComment.snippet.textDisplay,
        });
      });
      loopHandler = result.nextPageToken;
    } else {
      const fetchData = await fetch(
        `${url}?part=snippet&maxResults=1000&pageToken=${loopHandler}&videoId=${videoId}&key=${key}`
      );
      const result = await fetchData.json();
      if (!result) {
        loopHandler = undefined;
        throw new Error("Error setup variables");
      }
      result.items.map((item: any) => {
        list.push({
          user: item.snippet.topLevelComment.snippet.authorDisplayName,
          comment: item.snippet.topLevelComment.snippet.textDisplay,
        });
      });
      loopHandler = result.nextPageToken;
    }
  }

  return Response.json(list);
}
