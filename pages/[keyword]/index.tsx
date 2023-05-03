import Search from "@/components/layout/search"
import { useRouter } from "next/router"

export default function KeywordDetail() {
    const router = useRouter()
    return (
        <div>
            <div className="flex justify-between pb-3">
                <h1 className="font-bold text-lg">{router.query?.keyword}</h1>
                <Search />
            </div>
        </div>
    )
}
