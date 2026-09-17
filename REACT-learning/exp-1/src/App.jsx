import Cards from "./components/Cards/Cards"
import projectImg from "./assets/AI_Radio.png"
import Projects_cards from "./components/Projects_cards/Projects_cards"

 const App = () => {

  const arr = [10, 20, 30, 40, 50]

  return (
    <div className="parent">
      {arr.map(function(idx){

        return <div key={idx}>
          <Projects_cards />
        </div>
      })}
    </div>
  )

  // const jobOpenings = [
  //   {
  //     brandlogo: "https://img.magnific.com/premium-vector/logo-google_798572-207.jpg?semt=ais_hybrid&w=740&q=80",
  //     company: "Google",
  //     datePosted: "5 days ago",
  //     post: "Frontend Engineer",
  //     tag1: "Full-Time",
  //     tag2: "Mid Level",
  //     pay: "$85/hr",
  //     location: "Bengaluru, India",
  //   },
  //   {
  //     brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzChlzw4_AmFlEk86g0TiPq7s9vBGzBlpw7N6U6Dp-muzJ4FH9Dm3Ee0&s=10",
  //     company: "Meta",
  //     datePosted: "1 week ago",
  //     post: "Product Designer",
  //     tag1: "Full-Time",
  //     tag2: "Senior Level",
  //     pay: "$95/hr",
  //     location: "Mumbai, India",
  //   },
  //   {
  //     brandlogo: "https://static.vecteezy.com/system/resources/thumbnails/019/766/223/small_2x/amazon-logo-amazon-icon-transparent-free-png.png",
  //     company: "Amazon",
  //     datePosted: "10 days ago",
  //     post: "UI/UX Designer",
  //     tag1: "Part-Time",
  //     tag2: "Senior Level",
  //     pay: "$70/hr",
  //     location: "Hyderabad, India",
  //   },
  //   {
  //     brandlogo: "https://1000logos.net/wp-content/uploads/2017/02/Apple-Logo.png",
  //     company: "Apple",
  //     datePosted: "2 weeks ago",
  //     post: "iOS Developer",
  //     tag1: "Full-Time",
  //     tag2: "Mid Level",
  //     pay: "$90/hr",
  //     location: "Bengaluru, India",
  //   },
  //   {
  //     brandlogo: "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:286,cw:736,ch:736,q:80,w:736/BDvqkcvVLHBu6xZ5yaN7jQ.jpg",
  //     company: "Netflix",
  //     datePosted: "3 days ago",
  //     post: "Software Engineer",
  //     tag1: "Full-Time",
  //     tag2: "Senior Level",
  //     pay: "$110/hr",
  //     location: "Mumbai, India",
  //   },
  //   {
  //     brandlogo: "https://static.vecteezy.com/system/resources/thumbnails/027/127/592/small_2x/microsoft-logo-microsoft-icon-transparent-free-png.png",
  //     company: "Microsoft",
  //     datePosted: "3 weeks ago",
  //     post: "Cloud Engineer",
  //     tag1: "Full-Time",
  //     tag2: "Junior Level",
  //     pay: "$65/hr",
  //     location: "Pune, India",
  //   },
  //   {
  //     brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCXXhgVDLkjPZVyvTWmq95c1fIB6RBZnYTkE3wWDV_CK2v8WCU9N51axs&s=10",
  //     company: "NVIDIA",
  //     datePosted: "6 days ago",
  //     post: "Machine Learning Engineer",
  //     tag1: "Full-Time",
  //     tag2: "Senior Level",
  //     pay: "$105/hr",
  //     location: "Bengaluru, India",
  //   },
  //   {
  //     brandlogo: "https://cdn.mos.cms.futurecdn.net/5ij5qdSHFzJ2piPRuoTL5F.jpg",
  //     company: "Uber",
  //     datePosted: "4 weeks ago",
  //     post: "Data Analyst",
  //     tag1: "Contract",
  //     tag2: "Mid Level",
  //     pay: "$60/hr",
  //     location: "Hyderabad, India",
  //   },
  //   {
  //     brandlogo: "https://pngdownload.io/wp-content/uploads/2023/12/Adobe-Logo-PNG-Design-Brand-Transparent-jpg.webp",
  //     company: "Adobe",
  //     datePosted: "2 days ago",
  //     post: "React Developer",
  //     tag1: "Full-Time",
  //     tag2: "Junior Level",
  //     pay: "$55/hr",
  //     location: "Noida, India",
  //   },
  //   {
  //     brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcVeT95ioBPQeSMPgA88Xv-71C8oeLciSzgcBNrYZW2w&s ",
  //     company: "Salesforce",
  //     datePosted: "10 weeks ago",
  //     post: "Backend Engineer",
  //     tag1: "Full-Time",
  //     tag2: "Senior Level",
  //     pay: "$92/hr",
  //     location: "Bengaluru, India",
  //   },
  // ];
  // return (
  //   <div className="parent">
  //     {jobOpenings.map(function(elem, idx){

  //       return <div key={idx}>
  //         <Cards logo={elem.brandlogo} company={elem.company} date={elem.datePosted} post={elem.post} t1={elem.tag1} t2={elem.tag2} payhr={elem.pay} loc={elem.location} />
  //       </div>
  //     })}
  //   </div>
  // )
}
 
export default App

