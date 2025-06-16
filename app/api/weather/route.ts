import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city");

    if (!city) {
        return NextResponse.json({ error: "Nie podano miasta w parametrze zapytania 'city'" }, { status: 400 });
    }

    const url = `https://wttr.in/${city}?format=j1`;

    try {

        const res = await fetch(url);

        if (!res.ok) {
            return NextResponse.json({ error: "Błąd API" }, { status: res.status })
        }

        const data = await res.json();

        return NextResponse.json(data);

    } catch {
        return NextResponse.json({ error: "Błąd połączenia" }, { status: 500 })
    }

}