import { useEffect, useState } from "react";


function Board(){

    const [page, setPage]= useState(1);


                                            //boardList타입
    const [boardList, setBoardList] = useState([]);//상태변경되면 렌더링 다시

    useEffect(()=>{
        getList();

    }, [page]);//페이지값변하면 다시 실행

    function next(){
        setPage(page+1);
       
    }

    async function getList (){
        //console.log('get List');
    
        const j = await fetch(`http://localhost/notice/list/${page}`);
        const result = await j.json();
        setBoardList(result);
    }


    return (
        <>
            <h1>React Board List</h1>
            <table className="table table-hover">
                <thead>
                    <th>No.</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>날짜</th>
                    <th>조회수</th>
                </thead>
                <tbody>
                    {
                        boardList.map((ele, idx)=>(
                            <tr key={idx}>
                                <td>{ele.boardNum}</td>
                                <td>{ele.boardTitle}</td>
                                <td>{ele.boardWriter}</td>
                                <td>{ele.boardDate}</td>
                                <td>{ele.boardHit}</td>
                            </tr>
                        ))
                        
                        
                        
                        

                    }


                </tbody>
            </table>

            {/* <button onClick={}>이전</button> */}
            <button onClick={next}>다음</button>
        
        </>

    );
}



export default Board;

