// api/entry/delete?id=1
import { NextResponse, type NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(req: NextRequest){
    const { searchParams } = req.nextUrl;
    const id= searchParams.get('id')!;

    try {
        await prisma.entry.delete({
            where:{
                id,
            },
        })
        return new NextResponse("Post deleted", {status: 200})
        
    } catch (error: any) {
        return new NextResponse(error, {
            status: 500
        });
    }


}