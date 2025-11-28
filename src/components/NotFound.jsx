

export default function NotFound() {
  return (
    <div style={{padding:"40px",textAlign:"center"}}>
        <h1 style={{fontSize:"48px",textAlign:"center"}}>404-Page Not Found</h1>
        <p style={{textAlign:"center", padding:25}}>お探しのページは存在しません。</p>
        <a href="/"style={{
          marginTop:"20px",
          display:"inline-block",
          padding:"10px 20px",
          borderRadius:"8px",
          background:"#333",
          color:"#fff",
          textDecoration:"none"
        }}>
        ホームへ戻る
        </a>
    </div>
  )
}
