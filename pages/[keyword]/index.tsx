import LineChart, { LineChartProps } from "@/components/chart/linechart"
import Container from "@/components/layout/container"
import Search from "@/components/layout/search"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const related = {
    "rankedList": [
        {
            "rankedKeyword": [
                {
                    "query": "다이어트 더쿠",
                    "value": 100,
                    "formattedValue": "100",
                    "hasData": true,
                    "link": "/trends/explore?q=%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8+%EB%8D%94%EC%BF%A0&date=today+12-m&geo=KR"
                },
                {
                    "query": "다이어트 칼로리",
                    "value": 81,
                    "formattedValue": "81",
                    "hasData": true,
                    "link": "/trends/explore?q=%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8+%EC%B9%BC%EB%A1%9C%EB%A6%AC&date=today+12-m&geo=KR"
                },
                {
                    "query": "다이어트 식단",
                    "value": 70,
                    "formattedValue": "70",
                    "hasData": true,
                    "link": "/trends/explore?q=%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8+%EC%8B%9D%EB%8B%A8&date=today+12-m&geo=KR"
                },
                {
                    "query": "다이어트 후기",
                    "value": 49,
                    "formattedValue": "49",
                    "hasData": true,
                    "link": "/trends/explore?q=%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8+%ED%9B%84%EA%B8%B0&date=today+12-m&geo=KR"
                },
                {
                    "query": "다이어트 운동",
                    "value": 42,
                    "formattedValue": "42",
                    "hasData": true,
                    "link": "/trends/explore?q=%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8+%EC%9A%B4%EB%8F%99&date=today+12-m&geo=KR"
                },
                {
                    "query": "다이어트 디시",
                    "value": 31,
                    "formattedValue": "31",
                    "hasData": true,
                    "link": "/trends/explore?q=%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8+%EB%94%94%EC%8B%9C&date=today+12-m&geo=KR"
                },
                {
                    "query": "다이어트 음식",
                    "value": 30,
                    "formattedValue": "30",
                    "hasData": true,
                    "link": "/trends/explore?q=%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8+%EC%9D%8C%EC%8B%9D&date=today+12-m&geo=KR"
                },
                {
                    "query": "남자 다이어트",
                    "value": 29,
                    "formattedValue": "29",
                    "hasData": true,
                    "link": "/trends/explore?q=%EB%82%A8%EC%9E%90+%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8&date=today+12-m&geo=KR"
                },
                {
                    "query": "다이어트 단백질",
                    "value": 19,
                    "formattedValue": "19",
                    "hasData": true,
                    "link": "/trends/explore?q=%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8+%EB%8B%A8%EB%B0%B1%EC%A7%88&date=today+12-m&geo=KR"
                },
                {
                    "query": "다이어트 닭 가슴살",
                    "value": 16,
                    "formattedValue": "16",
                    "hasData": true,
                    "link": "/trends/explore?q=%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8+%EB%8B%AD+%EA%B0%80%EC%8A%B4%EC%82%B4&date=today+12-m&geo=KR"
                },
                {
                    "query": "닭 가슴살",
                    "value": 16,
                    "formattedValue": "16",
                    "hasData": true,
                    "link": "/trends/explore?q=%EB%8B%AD+%EA%B0%80%EC%8A%B4%EC%82%B4&date=today+12-m&geo=KR"
                },
                {
                    "query": "다이어트 전후",
                    "value": 16,
                    "formattedValue": "16",
                    "hasData": true,
                    "link": "/trends/explore?q=%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8+%EC%A0%84%ED%9B%84&date=today+12-m&geo=KR"
                },
                {
                    "query": "서브웨이 다이어트",
                    "value": 15,
                    "formattedValue": "15",
                    "hasData": true,
                    "link": "/trends/explore?q=%EC%84%9C%EB%B8%8C%EC%9B%A8%EC%9D%B4+%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8&date=today+12-m&geo=KR"
                },
                {
                    "query": "다이어트 갤러리",
                    "value": 15,
                    "formattedValue": "15",
                    "hasData": true,
                    "link": "/trends/explore?q=%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8+%EA%B0%A4%EB%9F%AC%EB%A6%AC&date=today+12-m&geo=KR"
                },
                {
                    "query": "서브웨이",
                    "value": 15,
                    "formattedValue": "15",
                    "hasData": true,
                    "link": "/trends/explore?q=%EC%84%9C%EB%B8%8C%EC%9B%A8%EC%9D%B4&date=today+12-m&geo=KR"
                },
                {
                    "query": "계란 다이어트",
                    "value": 14,
                    "formattedValue": "14",
                    "hasData": true,
                    "link": "/trends/explore?q=%EA%B3%84%EB%9E%80+%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8&date=today+12-m&geo=KR"
                },
                {
                    "query": "다이어트 고구마",
                    "value": 14,
                    "formattedValue": "14",
                    "hasData": true,
                    "link": "/trends/explore?q=%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8+%EA%B3%A0%EA%B5%AC%EB%A7%88&date=today+12-m&geo=KR"
                },
                {
                    "query": "다이어트 방법",
                    "value": 14,
                    "formattedValue": "14",
                    "hasData": true,
                    "link": "/trends/explore?q=%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8+%EB%B0%A9%EB%B2%95&date=today+12-m&geo=KR"
                },
                {
                    "query": "다이어트 도시락",
                    "value": 14,
                    "formattedValue": "14",
                    "hasData": true,
                    "link": "/trends/explore?q=%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8+%EB%8F%84%EC%8B%9C%EB%9D%BD&date=today+12-m&geo=KR"
                },
                {
                    "query": "다이어트 탄수화물",
                    "value": 13,
                    "formattedValue": "13",
                    "hasData": true,
                    "link": "/trends/explore?q=%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8+%ED%83%84%EC%88%98%ED%99%94%EB%AC%BC&date=today+12-m&geo=KR"
                },
                {
                    "query": "다이어트 자극",
                    "value": 13,
                    "formattedValue": "13",
                    "hasData": true,
                    "link": "/trends/explore?q=%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8+%EC%9E%90%EA%B7%B9&date=today+12-m&geo=KR"
                },
                {
                    "query": "다이어트 보조제",
                    "value": 13,
                    "formattedValue": "13",
                    "hasData": true,
                    "link": "/trends/explore?q=%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8+%EB%B3%B4%EC%A1%B0%EC%A0%9C&date=today+12-m&geo=KR"
                },
                {
                    "query": "다이어트 라면",
                    "value": 12,
                    "formattedValue": "12",
                    "hasData": true,
                    "link": "/trends/explore?q=%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8+%EB%9D%BC%EB%A9%B4&date=today+12-m&geo=KR"
                },
                {
                    "query": "다이어트 간식",
                    "value": 12,
                    "formattedValue": "12",
                    "hasData": true,
                    "link": "/trends/explore?q=%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8+%EA%B0%84%EC%8B%9D&date=today+12-m&geo=KR"
                },
                {
                    "query": "치킨 다이어트",
                    "value": 12,
                    "formattedValue": "12",
                    "hasData": true,
                    "link": "/trends/explore?q=%EC%B9%98%ED%82%A8+%EB%8B%A4%EC%9D%B4%EC%96%B4%ED%8A%B8&date=today+12-m&geo=KR"
                }
            ]
        },
        {
            "rankedTopic": [
                {
                    "topic": {
                        "mid": "/g/1213h4d9",
                        "title": "식이요법",
                        "type": "주제"
                    },
                    "value": 100,
                    "formattedValue": "100",
                    "hasData": true,
                    "link": "/trends/explore?q=/g/1213h4d9&date=today+12-m&geo=KR"
                },
                {
                    "topic": {
                        "mid": "/m/02zkwn",
                        "title": "식이",
                        "type": "주제"
                    },
                    "value": 22,
                    "formattedValue": "22",
                    "hasData": true,
                    "link": "/trends/explore?q=/m/02zkwn&date=today+12-m&geo=KR"
                },
                {
                    "topic": {
                        "mid": "/g/11jfrz9hm1",
                        "title": "더쿠",
                        "type": "주제"
                    },
                    "value": 8,
                    "formattedValue": "8",
                    "hasData": true,
                    "link": "/trends/explore?q=/g/11jfrz9hm1&date=today+12-m&geo=KR"
                },
                {
                    "topic": {
                        "mid": "/m/01wv2",
                        "title": "칼로리",
                        "type": "주제"
                    },
                    "value": 7,
                    "formattedValue": "7",
                    "hasData": true,
                    "link": "/trends/explore?q=/m/01wv2&date=today+12-m&geo=KR"
                },
                {
                    "topic": {
                        "mid": "/m/024gjb",
                        "title": "차림표",
                        "type": "주제"
                    },
                    "value": 6,
                    "formattedValue": "6",
                    "hasData": true,
                    "link": "/trends/explore?q=/m/024gjb&date=today+12-m&geo=KR"
                },
                {
                    "topic": {
                        "mid": "/m/019w6h",
                        "title": "운동",
                        "type": "활동"
                    },
                    "value": 3,
                    "formattedValue": "3",
                    "hasData": true,
                    "link": "/trends/explore?q=/m/019w6h&date=today+12-m&geo=KR"
                },
                {
                    "topic": {
                        "mid": "/m/02kjb_",
                        "title": "약",
                        "type": "주제"
                    },
                    "value": 3,
                    "formattedValue": "3",
                    "hasData": true,
                    "link": "/trends/explore?q=/m/02kjb_&date=today+12-m&geo=KR"
                },
                {
                    "topic": {
                        "mid": "/m/09b5t",
                        "title": "닭",
                        "type": "새"
                    },
                    "value": 2,
                    "formattedValue": "2",
                    "hasData": true,
                    "link": "/trends/explore?q=/m/09b5t&date=today+12-m&geo=KR"
                },
                {
                    "topic": {
                        "mid": "/m/05wvs",
                        "title": "단백질",
                        "type": "주제"
                    },
                    "value": 1,
                    "formattedValue": "1",
                    "hasData": true,
                    "link": "/trends/explore?q=/m/05wvs&date=today+12-m&geo=KR"
                },
                {
                    "topic": {
                        "mid": "/m/02p16m6",
                        "title": "살",
                        "type": "주제"
                    },
                    "value": 1,
                    "formattedValue": "1",
                    "hasData": true,
                    "link": "/trends/explore?q=/m/02p16m6&date=today+12-m&geo=KR"
                },
                {
                    "topic": {
                        "mid": "/m/0hk_v",
                        "title": "영양소",
                        "type": "주제"
                    },
                    "value": 1,
                    "formattedValue": "1",
                    "hasData": true,
                    "link": "/trends/explore?q=/m/0hk_v&date=today+12-m&geo=KR"
                },
                {
                    "topic": {
                        "mid": "/m/0k5sv46",
                        "title": "닭 가슴살",
                        "type": "닭"
                    },
                    "value": 1,
                    "formattedValue": "1",
                    "hasData": true,
                    "link": "/trends/explore?q=/m/0k5sv46&date=today+12-m&geo=KR"
                },
                {
                    "topic": {
                        "mid": "/m/02mw60",
                        "title": "몸무게",
                        "type": "주제"
                    },
                    "value": 1,
                    "formattedValue": "1",
                    "hasData": true,
                    "link": "/trends/explore?q=/m/02mw60&date=today+12-m&geo=KR"
                },
                {
                    "topic": {
                        "mid": "/m/02zks",
                        "title": "지방",
                        "type": "음식"
                    },
                    "value": 1,
                    "formattedValue": "1",
                    "hasData": true,
                    "link": "/trends/explore?q=/m/02zks&date=today+12-m&geo=KR"
                },
                {
                    "topic": {
                        "mid": "/m/083sl",
                        "title": "주",
                        "type": "시간"
                    },
                    "value": 1,
                    "formattedValue": "1",
                    "hasData": true,
                    "link": "/trends/explore?q=/m/083sl&date=today+12-m&geo=KR"
                },
                {
                    "topic": {
                        "mid": "/m/0119nml8",
                        "title": "부작용",
                        "type": "주제"
                    },
                    "value": 1,
                    "formattedValue": "1",
                    "hasData": true,
                    "link": "/trends/explore?q=/m/0119nml8&date=today+12-m&geo=KR"
                },
                {
                    "topic": {
                        "mid": "/m/0f7q4",
                        "title": "써브웨이",
                        "type": "레스토랑 체인"
                    },
                    "value": 1,
                    "formattedValue": "1",
                    "hasData": true,
                    "link": "/trends/explore?q=/m/0f7q4&date=today+12-m&geo=KR"
                },
                {
                    "topic": {
                        "mid": "/m/01sh2",
                        "title": "탄수화물",
                        "type": "주제"
                    },
                    "value": 1,
                    "formattedValue": "1",
                    "hasData": true,
                    "link": "/trends/explore?q=/m/01sh2&date=today+12-m&geo=KR"
                },
                {
                    "topic": {
                        "mid": "/m/0dm32",
                        "title": "고구마",
                        "type": "채소"
                    },
                    "value": 1,
                    "formattedValue": "1",
                    "hasData": true,
                    "link": "/trends/explore?q=/m/0dm32&date=today+12-m&geo=KR"
                },
                {
                    "topic": {
                        "mid": "/m/0fltx",
                        "title": "비만증",
                        "type": "질병"
                    },
                    "value": 1,
                    "formattedValue": "1",
                    "hasData": true,
                    "link": "/trends/explore?q=/m/0fltx&date=today+12-m&geo=KR"
                },
                {
                    "topic": {
                        "mid": "/m/033cnk",
                        "title": "알",
                        "type": "식품"
                    },
                    "value": 1,
                    "formattedValue": "1",
                    "hasData": true,
                    "link": "/trends/explore?q=/m/033cnk&date=today+12-m&geo=KR"
                },
                {
                    "topic": {
                        "mid": "/m/0c3yjpn",
                        "title": "밥",
                        "type": "주제"
                    },
                    "value": 1,
                    "formattedValue": "1",
                    "hasData": true,
                    "link": "/trends/explore?q=/m/0c3yjpn&date=today+12-m&geo=KR"
                },
                {
                    "topic": {
                        "mid": "/g/122fpn6r",
                        "title": "음료",
                        "type": "요리 종류"
                    },
                    "value": 1,
                    "formattedValue": "1",
                    "hasData": true,
                    "link": "/trends/explore?q=/g/122fpn6r&date=today+12-m&geo=KR"
                },
                {
                    "topic": {
                        "mid": "/m/048wsd",
                        "title": "김밥",
                        "type": "음식"
                    },
                    "value": 1,
                    "formattedValue": "1",
                    "hasData": true,
                    "link": "/trends/explore?q=/m/048wsd&date=today+12-m&geo=KR"
                },
                {
                    "topic": {
                        "mid": "/m/03ch05x",
                        "title": "신세경",
                        "type": "대한민국 배우"
                    },
                    "value": 0,
                    "formattedValue": "<1",
                    "hasData": true,
                    "link": "/trends/explore?q=/m/03ch05x&date=today+12-m&geo=KR"
                }
            ]
        }
    ]
}
const news = {
    "lastBuildDate": "Thu, 04 May 2023 17:19:35 +0900",
    "total": 716301,
    "start": 1,
    "display": 10,
    "items": [
        {
            "title": "&apos;<b>다이어트</b> 약 성지&apos; 마약류관리법 위반했나…경찰 수사 착수",
            "originallink": "https://www.hankyung.com/society/article/2023050426127",
            "link": "https://n.news.naver.com/mnews/article/015/0004840788?sid=102",
            "description": "&apos;<b>다이어트</b> 약 성지&apos;로 불리던 병원에 대해 경찰이 수사에 착수했다. 2일 서울 구로경찰서는 구로구 소재 A... A 의원은 온라인에서 &apos;<b>다이어트</b> 성지&apos;로 불렸던 곳. 병원이 문을 열기 전부터 사람들이 줄을 서며 &apos;오픈런&apos;을 할... "
        },
        {
            "title": "[헬스S] 무리한 <b>다이어트</b>, 생리통 위험 높인다",
            "originallink": "http://moneys.mt.co.kr/news/mwView.php?no=2023050309564352824",
            "link": "https://n.news.naver.com/mnews/article/417/0000918206?sid=103",
            "description": "이는 무리한 <b>다이어트</b> 등으로 이어지는데 부적절한 체중조절 행동은 여성의 월경곤란증(생리통) 위험을 높인다는 연구결과가 나왔다. 질병관리청 국립보건연구원에 따르면 승인되지 않은 <b>다이어트</b> 보조제를 섭취하는... "
        },
        {
            "title": "박봄, 건강이상설 이후 <b>다이어트</b> 성공? 확 달라진 근황",
            "originallink": "https://www.sportsseoul.com/news/read/1310099?ref=naver",
            "link": "https://n.news.naver.com/mnews/article/468/0000941549?sid=106",
            "description": "특히 박봄은 지난해 1월 한 <b>다이어트</b> 전문 업체와 함께 11kg 감량을 전한 바 있다. 그러나 이후 무대에서 요요가 온 모습으로 건강 이상설이 돌았지만 다양한 일상을 전해 팬들을 안심시켰다. 한편, 박봄은 2NE1 해체 이후... "
        },
        {
            "title": "신봉선, 놀라운 <b>다이어트</b> 유지 근황…&quot;여배우 포스 좔좔&quot;",
            "originallink": "https://www.xportsnews.com/article/1720087",
            "link": "https://n.news.naver.com/mnews/article/311/0001588866?sid=106",
            "description": "방송인 신봉선이 <b>다이어트</b> 유지 근황으로 시선을 사로잡았다. 신봉선은 지난 3일 광고 촬영 현장 사진을... 40여 년 동안 나쁜 습관 하루 아침에 고치지는 못해도 때때로 폭식도 하지만 함께여서 고마워요&quot;라며 <b>다이어트</b>... "
        },
        {
            "title": "구로 &apos;<b>다이어트</b> 성지&apos; 경찰 수사…약빨 잘 받는다는 그곳 뭔일",
            "originallink": "https://www.joongang.co.kr/article/25159617",
            "link": "https://n.news.naver.com/mnews/article/025/0003277384?sid=102",
            "description": "&apos;<b>다이어트</b> 약 성지&apos;로 알려진 서울 구로구 한 의원에 대해 경찰이 수사에 착수했다. 서울 구로경찰서는 구로구 소재 A 의원을 마약류 관리법 위반 혐의로 수사하고 있다고 2일 밝혔다. A 의원은 <b>다이어트</b> 약 중 하나로... "
        },
        {
            "title": "[단독] 경찰, ‘<b>다이어트</b>약 성지’ 마약류관리법 위반 수사",
            "originallink": "https://www.hani.co.kr/arti/society/society_general/1090212.html",
            "link": "https://n.news.naver.com/mnews/article/028/0002638163?sid=102",
            "description": "‘<b>다이어트</b>약 성지’로 불리며 ‘오픈런’ 행렬이 이어지는 서울 구로구 한 비만클리닉을 경찰이... 서울 구로경찰서는 온라인상에서 ‘<b>다이어트</b>약 3대 성지’ 중 한 곳으로 꼽히는 서울 구로구 ㄱ의원에 대해 마약류... "
        },
        {
            "title": "스스로를 학대하는 아이들…섭식장애는 <b>다이어트</b>가 아니다",
            "originallink": "https://www.news1.kr/articles/5034679",
            "link": "https://n.news.naver.com/mnews/article/421/0006786336?sid=102",
            "description": "&quot; 스무 해 동안 거식증을 앓았던 경험을 바탕으로 &lt;삼키기 연습&gt;이라는 자서전을 쓴 박지니 작가(43)는 섭식장애를 &quot;<b>다이어트</b>가 아니라 자해이고 자살&quot;이라고 말한다. 그는 &quot;피상적으로 과도한 <b>다이어트</b>, 잘못 돌아가는... "
        },
        {
            "title": "요요 없이 살 빼는 <b>다이어트</b> 습관은?",
            "originallink": "https://kormedi.com/?p=1587762",
            "link": "https://n.news.naver.com/mnews/article/296/0000065521?sid=103",
            "description": "체중 관리를 위해서는 <b>다이어트</b> 건강식과 운동 및 생활습관 개선 등이 모두 필요하다. 특히 지속적인 생활습관 개선으로 체중 관리에 신경써야 한다. 요요현상 없이 살 빼는 근원적인 <b>다이어트</b> 습관을 알아보자.... "
        },
        {
            "title": "대출금리 떨어져도 가계는 ‘빚 <b>다이어트</b>’",
            "originallink": "http://news.heraldcorp.com/view.php?ud=20230504000276",
            "link": "https://n.news.naver.com/mnews/article/016/0002139122?sid=101",
            "description": "기준금리 인상과 함께 시작된 가계의 ‘빚 <b>다이어트</b>’ 열풍이 계속되는 것이다. 코로나19 이후 급격하게 불아난 가계부채 문제가 한국 경제의 발목을 잡고 있는 상황에서 이같은 가계부채 감소 현상은 긍정적이라는... "
        },
        {
            "title": "박봄, <b>다이어트</b> 성공…인형 같은 근황 공개 [스타★샷]",
            "originallink": "http://www.sportsworldi.com/newsView/20230503516772",
            "link": "https://n.news.naver.com/mnews/article/396/0000643244?sid=106",
            "description": "그룹 2NE1 출신 박봄이 <b>다이어트</b> 근황을 공개해 화제가 되었다. 3일 박봄은 자신의 소셜 계정을 통해... 당시 소속사는 사실이 아니라며 박봄이 <b>다이어트</b> 중이라고 알린 바 있다. 국내외 팬들은 몰라보게 살이 빠진... "
        }
    ]
}
const kin = {
    "lastBuildDate": "Thu, 04 May 2023 17:19:34 +0900",
    "total": 3734201,
    "start": 1,
    "display": 10,
    "items": [
        {
            "title": "<b>다이어트</b>관련",
            "link": "https://kin.naver.com/qna/detail.naver?d1id=5&dirId=50803&docId=442844519&qb=64uk7J207Ja07Yq4&enc=utf8&section=kin.qna&rank=1&search_sort=0&spq=0",
            "description": "16살 남학생입니다 <b>다이어트</b>를 하려고하는데 식단 조절 운동 하고는 있는데 싑지가 않아서요 혹시 인터넷에 서현<b>다이어트</b> 같은 <b>다이어트</b> 약을 먹어도 되나요? <b>다이어트</b> 약 추천좀 부탁드려요ㅠ 학생분들은 <b>다이어트</b> 약을 드시는... "
        },
        {
            "title": "<b>다이어트</b>효소 따로 있나요?",
            "link": "https://kin.naver.com/qna/detail.naver?d1id=5&dirId=50803&docId=421399106&qb=64uk7J207Ja07Yq4&enc=utf8&section=kin.qna&rank=2&search_sort=0&spq=0",
            "description": "<b>다이어트</b>효소 알아보는데요 다들 주변에 효소를 먹으면서 <b>다이어트</b>한다고 하던데 <b>다이어트</b>효소가 따로 있나요? 효소를 먹으면서 <b>다이어트</b>를 했을 때 부작용은 없나요? 어떻게 효소를 먹으면서 <b>다이어트</b>를 하는건지 원리가 궁금합니다...... "
        },
        {
            "title": "<b>다이어트</b> 식단",
            "link": "https://kin.naver.com/qna/detail.naver?d1id=8&dirId=8030401&docId=441809276&qb=64uk7J207Ja07Yq4&enc=utf8&section=kin.qna&rank=3&search_sort=0&spq=0",
            "description": "하루에 2천 칼로리 정도먹으면 <b>다이어트</b>식단 이라고 하잖아여 그럼 마라탕 하나 시켜서 3끼로 나눠먹으면 <b>다이어트</b>아니에요..? 치킨도한마리로 3끼를 나눠먹으면 <b>다이어트</b>아니... 기업의 <b>다이어트</b> 컨설턴트 입니다! 하루 2천 칼로리... "
        },
        {
            "title": "<b>다이어트</b>약 질문",
            "link": "https://kin.naver.com/qna/detail.naver?d1id=7&dirId=70117&docId=426697465&qb=64uk7J207Ja07Yq4&enc=utf8&section=kin.qna&rank=4&search_sort=0&spq=0",
            "description": "살이 안빠져서 <b>다이어트</b>약 먹고 살 뺄려고 하는데 <b>다이어트</b>약 먹으면 살이 더 잘빠지는거 맞나요?  안녕하세요.... <b>다이어트</b>약 관련 질문 주셨는데, 답변드리도록 하겠습니다. 어떤 <b>다이어트</b>약도 직접적으로 살이 빠지지는 효과는 굉장히... "
        },
        {
            "title": "팬터민과 <b>다이어트</b>보조제",
            "link": "https://kin.naver.com/qna/detail.naver?d1id=5&dirId=50801&docId=444912623&qb=64uk7J207Ja07Yq4&enc=utf8&section=kin.qna&rank=5&search_sort=0&spq=0",
            "description": "... <b>다이어트</b> 중인데 펜터민(제품명 휴터민)의 도움을 받고 있어요. 근데 제가 가지고 있는 <b>다이어트</b> 보조제가 있는데 펜터민과 그 <b>다이어트</b> 보조제를 같은날에 먹어도 부작용이... 날에는 <b>다이어트</b> 보조제를 안먹고 있어요. <b>다이어트</b>... "
        },
        {
            "title": "한방<b>다이어트</b> 해보려구요~",
            "link": "https://kin.naver.com/qna/detail.naver?d1id=7&dirId=70309&docId=442609411&qb=64uk7J207Ja07Yq4&enc=utf8&section=kin.qna&rank=6&search_sort=0&spq=0",
            "description": "안녕하세여 한방<b>다이어트</b>가 요즘 대세라고 하고..무엇보다 실제 한방<b>다이어트</b> 성공사례를 보니 더 한방<b>다이어트</b>에... 평소에 절대 못뺄거 같은 체질이었는데..한방<b>다이어트</b>하고서는 날씬해진거 보니까 아무래도 딴건 아니고... "
        },
        {
            "title": "<b>다이어트</b> 성공하는 방법",
            "link": "https://kin.naver.com/qna/detail.naver?d1id=8&dirId=8030402&docId=444709905&qb=64uk7J207Ja07Yq4&enc=utf8&section=kin.qna&rank=7&search_sort=0&spq=0",
            "description": "고2 여학생이 <b>다이어트</b> 성공하는 방법을 알려주세요 제가 <b>다이어트</b>를 성공을... 하면서 <b>다이어트</b>에 집중하는 방법을 알려주세요ㅠㅠ 저 진짜 급해요ㅠㅠ... 학생 <b>다이어트</b> 관련해서랑 <b>다이어트</b>를 어떻게하면 좀 더 빠르게 빼는 방법을... "
        },
        {
            "title": "<b>다이어트</b> 식단 추천",
            "link": "https://kin.naver.com/qna/detail.naver?d1id=8&dirId=8030401&docId=441814010&qb=64uk7J207Ja07Yq4&enc=utf8&section=kin.qna&rank=8&search_sort=0&spq=0",
            "description": "... ㅋㅋ 안되겠다 싶어서 <b>다이어트</b> 제대로 해보려고 하는데요.! <b>다이어트</b> 식단을 어떻게 하는게 좋을지 모르겠네요.... 샐러드나 <b>다이어트</b> 도시락이나 닭가슴살을 먹으려고 하는데, 어떤게 좋을까요? 이왕하는거 건강한 <b>다이어트</b>... "
        },
        {
            "title": "<b>다이어트</b> 식단",
            "link": "https://kin.naver.com/qna/detail.naver?d1id=8&dirId=8030401&docId=441408935&qb=64uk7J207Ja07Yq4&enc=utf8&section=kin.qna&rank=9&search_sort=0&spq=0",
            "description": "제가 <b>다이어트</b>를 한달 넘게 하고 있는데 일반식이 아니라 <b>다이어트</b> 식단으로 먹고 있거든요 직접 요리도 해 먹구요 근데 먹고 싶은거 조금씩 먹어가면서 하는 <b>다이어트</b>도 있잖아요 제가 질문 드리고 싶은건 1. <b>다이어트</b> 식단으로만 살... "
        },
        {
            "title": "18여자 <b>다이어트</b>",
            "link": "https://kin.naver.com/qna/detail.naver?d1id=8&dirId=8030401&docId=444234367&qb=64uk7J207Ja07Yq4&enc=utf8&section=kin.qna&rank=10&search_sort=0&spq=0",
            "description": "<b>다이어트</b> 직빵인약이나 식단 운동법 있나요 얼굴 복부 위주로 뺄건데 오래 걸려도 되니까 직빵<b>다이어트</b> 앟려주세요 헬스나 홈트도 하려고 해요 <b>다이어트</b> 자극도 해주세요ㅠㅠ... <b>다이어트</b>에 대한 질문을 해주셨네요. 먼저, <b>다이어트</b>를... "
        }
    ]
}
const cafe = {
    "lastBuildDate": "Thu, 04 May 2023 17:19:34 +0900",
    "total": 6642457,
    "start": 1,
    "display": 10,
    "items": [
        {
            "title": "<b>다이어트</b>약 추천 8kg 빼기 성공!",
            "link": "http://cafe.naver.com/loosebaby/397349",
            "description": "빼보겠다며 <b>다이어트</b>약 추천 제품을 구매하게 되었답니다 이 <b>다이어트</b>약 추천 제품은 지방연소와 식욕억제에 도움 되는 성분이 초고농축되어 들어 있어 단기간 먹기만 해도 살이 쭉쭉 빠지게 된다더라고요 또, 운동이나... ",
            "cafename": "느린걸음(장애 보호자 및 재활 전문가...",
            "cafeurl": "https://cafe.naver.com/loosebaby"
        },
        {
            "title": "출산후<b>다이어트</b> 성공이네요",
            "link": "http://cafe.naver.com/andongmom/678271",
            "description": "아기 낳으면 출산후<b>다이어트</b>는 남편이 뭐든 지원해주기로 해서 출산 전부터 한약 알아봐놨어요. 양약이 아닌 한방 쪽으로 결정한 건 아무래도 출산후<b>다이어트</b>다 보니 성분이 좀 믿을만 해야 건강하게 뺄 수 있을 것... ",
            "cafename": "안동맘수다방",
            "cafeurl": "https://cafe.naver.com/andongmom"
        },
        {
            "title": "간혈적 <b>다이어트</b> 추천이요",
            "link": "http://cafe.naver.com/directwedding/5250354",
            "description": "식탐있는 편이라서 안먹는건 절대 못해서요 간혈적 <b>다이어트</b>로 가볍게 시작을 해봤어요 아가리다이어터 및... 근데 생각 보다 효과가 좋은거 같더라구여 일단 스트레스를 안받아요 <b>다이어트</b>를 하고 있다는 생각을 안해서... ",
            "cafename": "다이렉트 결혼준비",
            "cafeurl": "https://cafe.naver.com/directwedding"
        },
        {
            "title": "<b>다이어트</b> 영양제 괜찮네요",
            "link": "http://cafe.naver.com/miznett/3714038",
            "description": "얼마 전 건강하게 <b>다이어트</b>를 하기 위해 <b>다이어트</b> 영양제를 구매했는데요. 체중 감량에도 도움이 됐고, 살 빼기 전보다 훨씬 더 건강해진 것 같아서 소개해드려요! 일단 저는 평소 부종도 심했고, 하체 비만 체형을 가지고... ",
            "cafename": "미즈넷-임신 육아 임산부 교육 핫딜 아...",
            "cafeurl": "https://cafe.naver.com/miznett"
        },
        {
            "title": "<b>다이어트</b> 변비 너무 지겨워요..",
            "link": "http://cafe.naver.com/thyroidcancers/528587",
            "description": "<b>다이어트</b> 하기로 마음먹고 먹는 양을 줄여가면서 운동을 하고 있는데요 요즘 <b>다이어트</b> 변비가 넘 심해져서 화장실 가는 게 불편해요 신호가 와서 변기에 오래 앉아있어도 시원하게 변을 보지 못하네요 <b>다이어트</b> 변비에는... ",
            "cafename": "◆갑상선포럼 - 갑상선암,항진증,저하...",
            "cafeurl": "https://cafe.naver.com/thyroidcancers"
        },
        {
            "title": "저 자랑하러왔어요.(f.<b>다이어트</b>)",
            "link": "http://cafe.naver.com/elkas/48848",
            "description": "한달전쯤 막둥이 아파 입원했다 글쓰고 <b>다이어트</b> 한다고 했었는데 오늘은 살포시 자랑하러 왔어요. 3월7일 인생최대 몸무게 70.9 찍고 충격받아 바로 <b>다이어트</b> 돌입했고 조금씩 조금씩 야금야금 빼고 있었어요. 3월말... ",
            "cafename": "목포맘스퀸-목포맘 남악맘 오룡맘 무안...",
            "cafeurl": "https://cafe.naver.com/elkas"
        },
        {
            "title": "<b>다이어트</b> 중간점검! -5kg",
            "link": "http://cafe.naver.com/sujilovemom/610399",
            "description": "먹은 <b>다이어트</b>가 20일째 접어들었어요! 첫째 출산하고 50일 만에 원래 몸무게로 돌아와서 둘째도 쉽게 생각했는데. 둘째는 죽어라 안빠지더라구요ㅠ 도저히 이렇게 여름을 맞이 할 수 없겠어서 <b>다이어트</b> 시작했어요... ",
            "cafename": "용인수지맘 [상현 신봉 성복 풍덕천 동...",
            "cafeurl": "https://cafe.naver.com/sujilovemom"
        },
        {
            "title": "크로스핏 <b>다이어트</b>",
            "link": "http://cafe.naver.com/tpr33/221606",
            "description": "크로스핏 운동에 대한 질문 : <b>다이어트</b>하려고 운동알아보다가 크로스핏 알게되었는데! 크로스핏 <b>다이어트</b>에 도움 많이 될까요 ??",
            "cafename": "크로스핏매니아",
            "cafeurl": "https://cafe.naver.com/tpr33"
        },
        {
            "title": "다시 <b>다이어트</b> 합니다!ㅋㅋ",
            "link": "http://cafe.naver.com/mymyson/386164",
            "description": "작년 6월1일 73킬로에서 <b>다이어트</b> 시작해서 4~5개월동안 20킬로 정도 감량해서 작년 10월에 최저 몸무게 51.9킬로 찍고 <b>다이어트</b>를 그만뒀어요. 어떻게 그정도 먹고 버틸까 싶을정도로 적게 먹고 미친듯이 운동했는데 쑥쑥... ",
            "cafename": "외동아이 키우는 엄마들의 이야기★세...",
            "cafeurl": "https://cafe.naver.com/mymyson"
        },
        {
            "title": "<b>다이어트</b> 2개월 후기 입니다",
            "link": "http://cafe.naver.com/01057060011/73008",
            "description": "한달 <b>다이어트</b> 후기 올렸듯이 88 에서 78 키로 운동 안하고 10키로 했냈지만 2개월 차 부터는 식단도 똑같이, 운동도 하였지만 한달 보다 5키로 정도 밖에 효과를 못봤네요 ㅠ <b>다이어트</b> 2달 후 첫 술 참이슬만 먹던 저에게... ",
            "cafename": "■NO.1 토레스 매니아■ [토레스공식동...",
            "cafeurl": "https://cafe.naver.com/01057060011"
        }
    ]
}
const trend = {
    search: [
        {
            "period": "2023-02-08",
            "ratio": 66.58047
        },
        {
            "period": "2023-02-09",
            "ratio": 54.94505
        },
        {
            "period": "2023-02-10",
            "ratio": 49.51519
        },
        {
            "period": "2023-02-11",
            "ratio": 43.63283
        },
        {
            "period": "2023-02-12",
            "ratio": 51.45442
        },
        {
            "period": "2023-02-13",
            "ratio": 58.82352
        },
        {
            "period": "2023-02-14",
            "ratio": 64.12411
        },
        {
            "period": "2023-02-15",
            "ratio": 61.02133
        },
        {
            "period": "2023-02-16",
            "ratio": 56.94893
        },
        {
            "period": "2023-02-17",
            "ratio": 49.64447
        },
        {
            "period": "2023-02-18",
            "ratio": 38.65546
        },
        {
            "period": "2023-02-19",
            "ratio": 43.63283
        },
        {
            "period": "2023-02-20",
            "ratio": 52.48868
        },
        {
            "period": "2023-02-21",
            "ratio": 50.4848
        },
        {
            "period": "2023-02-22",
            "ratio": 47.64059
        },
        {
            "period": "2023-02-23",
            "ratio": 46.28312
        },
        {
            "period": "2023-02-24",
            "ratio": 43.18034
        },
        {
            "period": "2023-02-25",
            "ratio": 36.58694
        },
        {
            "period": "2023-02-26",
            "ratio": 46.21848
        },
        {
            "period": "2023-02-27",
            "ratio": 50.67873
        },
        {
            "period": "2023-02-28",
            "ratio": 46.92954
        },
        {
            "period": "2023-03-01",
            "ratio": 50.35552
        },
        {
            "period": "2023-03-02",
            "ratio": 46.41241
        },
        {
            "period": "2023-03-03",
            "ratio": 52.16548
        },
        {
            "period": "2023-03-04",
            "ratio": 46.99418
        },
        {
            "period": "2023-03-05",
            "ratio": 54.62184
        },
        {
            "period": "2023-03-06",
            "ratio": 60.18099
        },
        {
            "period": "2023-03-07",
            "ratio": 57.91855
        },
        {
            "period": "2023-03-08",
            "ratio": 54.04007
        },
        {
            "period": "2023-03-09",
            "ratio": 51.97155
        },
        {
            "period": "2023-03-10",
            "ratio": 53.32902
        },
        {
            "period": "2023-03-11",
            "ratio": 37.68584
        },
        {
            "period": "2023-03-12",
            "ratio": 57.5307
        },
        {
            "period": "2023-03-13",
            "ratio": 59.21137
        },
        {
            "period": "2023-03-14",
            "ratio": 79.05623
        },
        {
            "period": "2023-03-15",
            "ratio": 63.47769
        },
        {
            "period": "2023-03-16",
            "ratio": 60.37491
        },
        {
            "period": "2023-03-17",
            "ratio": 44.27925
        },
        {
            "period": "2023-03-18",
            "ratio": 46.21848
        },
        {
            "period": "2023-03-19",
            "ratio": 43.37427
        },
        {
            "period": "2023-03-20",
            "ratio": 61.79702
        },
        {
            "period": "2023-03-21",
            "ratio": 55.46218
        },
        {
            "period": "2023-03-22",
            "ratio": 56.17323
        },
        {
            "period": "2023-03-23",
            "ratio": 53.26438
        },
        {
            "period": "2023-03-24",
            "ratio": 43.18034
        },
        {
            "period": "2023-03-25",
            "ratio": 38.13833
        },
        {
            "period": "2023-03-26",
            "ratio": 40.59469
        },
        {
            "period": "2023-03-27",
            "ratio": 66.12798
        },
        {
            "period": "2023-03-28",
            "ratio": 56.36716
        },
        {
            "period": "2023-03-29",
            "ratio": 54.36328
        },
        {
            "period": "2023-03-30",
            "ratio": 59.4053
        },
        {
            "period": "2023-03-31",
            "ratio": 65.6755
        },
        {
            "period": "2023-04-01",
            "ratio": 100
        },
        {
            "period": "2023-04-02",
            "ratio": 63.86554
        },
        {
            "period": "2023-04-03",
            "ratio": 71.81641
        },
        {
            "period": "2023-04-04",
            "ratio": 63.34841
        },
        {
            "period": "2023-04-05",
            "ratio": 59.85778
        },
        {
            "period": "2023-04-06",
            "ratio": 56.04395
        },
        {
            "period": "2023-04-07",
            "ratio": 51.19586
        },
        {
            "period": "2023-04-08",
            "ratio": 45.70135
        },
        {
            "period": "2023-04-09",
            "ratio": 44.08532
        },
        {
            "period": "2023-04-10",
            "ratio": 58.6296
        },
        {
            "period": "2023-04-11",
            "ratio": 61.08597
        },
        {
            "period": "2023-04-12",
            "ratio": 49.83839
        },
        {
            "period": "2023-04-13",
            "ratio": 48.22236
        },
        {
            "period": "2023-04-14",
            "ratio": 44.53781
        },
        {
            "period": "2023-04-15",
            "ratio": 37.87976
        },
        {
            "period": "2023-04-16",
            "ratio": 43.18034
        },
        {
            "period": "2023-04-17",
            "ratio": 52.48868
        },
        {
            "period": "2023-04-18",
            "ratio": 49.57983
        },
        {
            "period": "2023-04-19",
            "ratio": 44.73173
        },
        {
            "period": "2023-04-20",
            "ratio": 42.40465
        },
        {
            "period": "2023-04-21",
            "ratio": 39.56043
        },
        {
            "period": "2023-04-22",
            "ratio": 32.51454
        },
        {
            "period": "2023-04-23",
            "ratio": 39.10795
        },
        {
            "period": "2023-04-24",
            "ratio": 49.70911
        },
        {
            "period": "2023-04-25",
            "ratio": 61.08597
        },
        {
            "period": "2023-04-26",
            "ratio": 65.80478
        },
        {
            "period": "2023-04-27",
            "ratio": 44.92566
        },
        {
            "period": "2023-04-28",
            "ratio": 40.46541
        },
        {
            "period": "2023-04-29",
            "ratio": 36.26373
        },
        {
            "period": "2023-04-30",
            "ratio": 35.94053
        },
        {
            "period": "2023-05-01",
            "ratio": 44.86102
        },
        {
            "period": "2023-05-02",
            "ratio": 55.20361
        },
        {
            "period": "2023-05-03",
            "ratio": 56.69036
        },
        {
            "period": "2023-05-04",
            "ratio": 46.54169
        },
        {
            "period": "2023-05-05",
            "ratio": 44.27925
        },
        {
            "period": "2023-05-06",
            "ratio": 41.95216
        },
        {
            "period": "2023-05-07",
            "ratio": 48.86877
        }
    ],
    click: [
        {
            "period": "2023-02-08",
            "ratio": 75.63951
        },
        {
            "period": "2023-02-09",
            "ratio": 76.74144
        },
        {
            "period": "2023-02-10",
            "ratio": 61.66863
        },
        {
            "period": "2023-02-11",
            "ratio": 39.70877
        },
        {
            "period": "2023-02-12",
            "ratio": 9.34015
        },
        {
            "period": "2023-02-13",
            "ratio": 10.25842
        },
        {
            "period": "2023-02-14",
            "ratio": 6.23114
        },
        {
            "period": "2023-02-15",
            "ratio": 4.46018
        },
        {
            "period": "2023-02-16",
            "ratio": 4.05352
        },
        {
            "period": "2023-02-17",
            "ratio": 5.64082
        },
        {
            "period": "2023-02-18",
            "ratio": 35.13052
        },
        {
            "period": "2023-02-19",
            "ratio": 7.29371
        },
        {
            "period": "2023-02-20",
            "ratio": 44.96917
        },
        {
            "period": "2023-02-21",
            "ratio": 41.16489
        },
        {
            "period": "2023-02-22",
            "ratio": 68.92299
        },
        {
            "period": "2023-02-23",
            "ratio": 36.16686
        },
        {
            "period": "2023-02-24",
            "ratio": 29.83077
        },
        {
            "period": "2023-02-25",
            "ratio": 42.51606
        },
        {
            "period": "2023-02-26",
            "ratio": 43.32939
        },
        {
            "period": "2023-02-27",
            "ratio": 39.69565
        },
        {
            "period": "2023-02-28",
            "ratio": 45.37583
        },
        {
            "period": "2023-03-01",
            "ratio": 67.23074
        },
        {
            "period": "2023-03-02",
            "ratio": 63.46582
        },
        {
            "period": "2023-03-03",
            "ratio": 100
        },
        {
            "period": "2023-03-04",
            "ratio": 83.54978
        },
        {
            "period": "2023-03-05",
            "ratio": 65.66968
        },
        {
            "period": "2023-03-06",
            "ratio": 56.32952
        },
        {
            "period": "2023-03-07",
            "ratio": 38.89544
        },
        {
            "period": "2023-03-08",
            "ratio": 45.20529
        },
        {
            "period": "2023-03-09",
            "ratio": 29.97507
        },
        {
            "period": "2023-03-10",
            "ratio": 34.81568
        },
        {
            "period": "2023-03-11",
            "ratio": 33.33333
        },
        {
            "period": "2023-03-12",
            "ratio": 32.62495
        },
        {
            "period": "2023-03-13",
            "ratio": 33.39892
        },
        {
            "period": "2023-03-14",
            "ratio": 41.70274
        },
        {
            "period": "2023-03-15",
            "ratio": 39.27587
        },
        {
            "period": "2023-03-16",
            "ratio": 26.30198
        },
        {
            "period": "2023-03-17",
            "ratio": 2.7417
        },
        {
            "period": "2023-03-18",
            "ratio": 19.37557
        },
        {
            "period": "2023-03-19",
            "ratio": 11.36035
        },
        {
            "period": "2023-03-20",
            "ratio": 19.3231
        },
        {
            "period": "2023-03-21",
            "ratio": 9.3008
        },
        {
            "period": "2023-03-22",
            "ratio": 3.45008
        },
        {
            "period": "2023-03-23",
            "ratio": 2.85976
        },
        {
            "period": "2023-03-24",
            "ratio": 1.86278
        },
        {
            "period": "2023-03-25",
            "ratio": 2.64987
        },
        {
            "period": "2023-03-26",
            "ratio": 2.89912
        },
        {
            "period": "2023-03-27",
            "ratio": 3.34513
        },
        {
            "period": "2023-03-28",
            "ratio": 3.25331
        },
        {
            "period": "2023-03-29",
            "ratio": 8.67112
        },
        {
            "period": "2023-03-30",
            "ratio": 4.99803
        },
        {
            "period": "2023-03-31",
            "ratio": 4.05352
        },
        {
            "period": "2023-04-01",
            "ratio": 8.81542
        },
        {
            "period": "2023-04-02",
            "ratio": 12.14744
        },
        {
            "period": "2023-04-03",
            "ratio": 12.67217
        },
        {
            "period": "2023-04-04",
            "ratio": 17.63085
        },
        {
            "period": "2023-04-05",
            "ratio": 23.04866
        },
        {
            "period": "2023-04-06",
            "ratio": 21.73684
        },
        {
            "period": "2023-04-07",
            "ratio": 10.96681
        },
        {
            "period": "2023-04-08",
            "ratio": 3.25331
        },
        {
            "period": "2023-04-09",
            "ratio": 3.24019
        },
        {
            "period": "2023-04-10",
            "ratio": 3.85674
        },
        {
            "period": "2023-04-11",
            "ratio": 2.62363
        },
        {
            "period": "2023-04-12",
            "ratio": 2.66299
        },
        {
            "period": "2023-04-13",
            "ratio": 2.61052
        },
        {
            "period": "2023-04-14",
            "ratio": 1.95461
        },
        {
            "period": "2023-04-15",
            "ratio": 1.86278
        },
        {
            "period": "2023-04-16",
            "ratio": 2.55804
        },
        {
            "period": "2023-04-17",
            "ratio": 3.27954
        },
        {
            "period": "2023-04-18",
            "ratio": 2.15138
        },
        {
            "period": "2023-04-19",
            "ratio": 2.11202
        },
        {
            "period": "2023-04-20",
            "ratio": 2.29568
        },
        {
            "period": "2023-04-21",
            "ratio": 2.46622
        },
        {
            "period": "2023-04-22",
            "ratio": 1.62665
        },
        {
            "period": "2023-04-23",
            "ratio": 1.91525
        },
        {
            "period": "2023-04-24",
            "ratio": 2.50557
        },
        {
            "period": "2023-04-25",
            "ratio": 3.33202
        },
        {
            "period": "2023-04-26",
            "ratio": 3.21395
        },
        {
            "period": "2023-04-27",
            "ratio": 2.11202
        },
        {
            "period": "2023-04-28",
            "ratio": 2.1645
        },
        {
            "period": "2023-04-29",
            "ratio": 2.19073
        },
        {
            "period": "2023-04-30",
            "ratio": 1.65289
        },
        {
            "period": "2023-05-01",
            "ratio": 2.84664
        },
        {
            "period": "2023-05-02",
            "ratio": 2.5974
        },
        {
            "period": "2023-05-03",
            "ratio": 2.61052
        },
        {
            "period": "2023-05-04",
            "ratio": 2.13826
        },
        {
            "period": "2023-05-05",
            "ratio": 2.54492
        },
        {
            "period": "2023-05-06",
            "ratio": 2.04643
        },
        {
            "period": "2023-05-07",
            "ratio": 1.53482
        }
    ]
}

function PopularKeyword({
    index,
    title,
    value
}:{
    index:number
    title:string
    value:number
}) {
    const NumberLabel = ({number}:{number:number}) => {
        return <div className="rounded-full bg-gray-100 w-6 h-6 flex items-center justify-center text-xs text-blue-500 p-1 font-bold">{number}</div>
                                
    }
    return <li className="flex justify-between items-center py-1">
        <div className="flex gap-2 items-center">
            <NumberLabel number={index+1} />
            <div>{title}</div>
        </div>
        <div className="flex gap-2 justify-end items-center">
            <div className="text-sm text-gray-600">{value}</div>
            <div className="w-36 bg-gray-100 h-2"><div style={{width: `${value}%`}} className="bg-blue-500 h-2"></div></div>
        </div>
    </li>
}

const ScrollArea = ({title, children}:{
    title: string
    children: React.ReactNode
}) => {
    const router = useRouter()
    return(
        <div className="overflow-auto gap-3 whitespace-nowrap p-1 pb-4" style={{overflow:'auto'}}>
            <h3 className="text-lg font-bold pb-3">{title}</h3>
            {children}
        </div>
    )
}

const ArticleItem = ({title, description, link, author, authorlink}: {
    title: string
    description: string
    link: string
    author?: string
    authorlink?: string
}) => {
    return(<article key={title} className="rounded-sm w-60 p-4 inline-block whitespace-normal shadow-lg">
        <div onClick={() => window.open(link)}>
            <h4 dangerouslySetInnerHTML={{__html: title.replaceAll('<b', '<b style="color:green"')}} className="mb-1" />
            <div className="text-sm text-gray-500 line-clamp-3 text-ellipsis" dangerouslySetInnerHTML={{__html: description.replaceAll('<b', '<b style="color:green"')}} />
        </div>
        {author && <div className="text-xs text-gray-800 mt-1" onClick={() => authorlink ? window.open(authorlink): {}}>[{author}]</div>}
    </article>)
}


export default function KeywordDetail() {
    const router = useRouter()
    const [trendData, setTrendData] = useState<LineChartProps[]>([])
    useEffect(() => {
        setTrendData([{
            type: "spline",
            name: "검색량",
            showInLegend: true,
            dataPoints: trend.search.map(keyword => {
                return {
                    y: keyword.ratio,
                    label: keyword.period
                }
            })
        },
        {
            type: "spline",
            name: "클릭수",
            showInLegend: true,
            dataPoints: trend.click.map(keyword => {
                return {
                    y: keyword.ratio,
                    label: keyword.period
                }
            })
        }])
    },[])
    if(!router.query?.keyword) return <></>
    return (
        <Container>
            <div className="flex justify-between pb-3">
                <h1 className="font-bold text-lg">{router.query?.keyword}</h1>
                <Search />
            </div>
            {trendData?.length > 0 && typeof document && <LineChart className="mb-4" data={trendData} />}

            <ScrollArea title={`${router.query?.keyword} 네이버 뉴스 관련글`}>
            {news.items.map((article, index) => <ArticleItem key={article.title+String(index)} title={article.title} description={article.description} link={article.originallink} />)}
            </ScrollArea>
            <ScrollArea title={`${router.query?.keyword} 네이버 지식인 관련글`}>
            {kin.items.map((article, index) => <ArticleItem key={article.title+String(index)} title={article.title} description={article.description} link={article.link} />)}
            </ScrollArea>
            <ScrollArea title={`${router.query?.keyword} 네이버 뉴스 관련글`}>
            {cafe.items.map((article, index) => <ArticleItem key={article.title+String(index)} title={article.title} description={article.description} link={article.link} author={article.cafename} authorlink={article.cafeurl} />)}
            </ScrollArea>

            {related.rankedList && related.rankedList.length > 0 && (<div className="flex justify-between gap-10">
                {related.rankedList[1] && related.rankedList[1].rankedTopic && related.rankedList[1].rankedTopic.length > 0 && (<div className="w-full">
                    <h3 className="text-lg font-bold pb-3">{router.query.keyword} 관련 인기 주제</h3>
                    <ul>
                        {related.rankedList[1].rankedTopic.map((topic, index) => (<PopularKeyword 
                            key={topic.topic.title}
                            title={`${topic.topic.title} - ${topic.topic.type}`} 
                            index={index}
                            value={topic.value}
                        />
                        ))}
                    </ul>
                </div>)}
                {related.rankedList[0] && related.rankedList[0].rankedKeyword && related.rankedList[0].rankedKeyword.length > 0 && (<div className="w-full">
                    <h3 className="text-lg font-bold pb-3">{router.query.keyword} 관련 인기 검색어</h3>
                    <ul>
                        {related.rankedList[0].rankedKeyword.map((keyword, index) => <PopularKeyword 
                            key={keyword.query}
                            title={keyword.query} 
                            index={index}
                            value={keyword.value}
                        />)}
                    </ul>
                </div>)}
            </div>)}
        </Container>
    )
}
