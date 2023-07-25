import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

const testimonials = [
  {
    name: 'Antonio',
    avatar: "A",
    title: "Software Engineer",
    description: "This is the best application I've used."
  },
  {
    name: 'John',
    avatar: "J",
    title: "Web Developer",
    description: "Great app! Really impressed with the functionality."
  },
  {
    name: 'Emily',
    avatar: "E",
    title: "UX Designer",
    description: "User-friendly and visually appealing. Love it!"
  },
  {
    name: 'Michael',
    avatar: "M",
    title: "Mobile App Developer",
    description: "The app works flawlessly on my phone. Awesome!"
  },
  {
    name: 'Sophia',
    avatar: "S",
    title: "Data Scientist",
    description: "Impressive data analysis capabilities. Kudos!"
  },
  {
    name: 'William',
    avatar: "W",
    title: "Backend Developer",
    description: "The server response time is amazing. Well done!"
  },
  {
    name: 'Olivia',
    avatar: "O",
    title: "Frontend Developer",
    description: "Sleek design and smooth user experience. Love it!"
  },
  {
    name: 'Ethan',
    avatar: "E",
    title: "DevOps Engineer",
    description: "Efficient deployment and great performance. Recommended!"
  }
]
export default function LandingContent(){
  return (
    <div className="px-10 pb-20">
        <h2 className="text-center text-4xl text-white font-extrabold mb-10">
          Testimonials
        </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((test) => (
          <Card key={test.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{test.name}</p>
                  <p className="text-zinc-400 text-sm">{test.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {test.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
