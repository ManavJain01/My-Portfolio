// Importing Local images
import leetcode from './images/leetcode.png'
import geeksforgeeks from './images/geeksforgeeks.png'
import code360 from './images/code360.png'
import codeforces from './images/codeforces.png'

export default function Achievements() {
  return (
    <div className="flex flex-col items-center gap-10 py-5">
      {/* Leetcode */}
      <div className="flex flex-col items-center gap-5">
        <p className="text-4xl">LeetCode</p>
        <img src={leetcode} alt="leetcode" className="h-64 object-contain" />

        <div className="flex gap-10">
          <span className="text-2xl flex-wrap">Easy: 104/818</span>
          <span className="text-2xl flex-wrap">Medium: 93/1706</span>
          <span className="text-2xl flex-wrap">Hard: 14/728</span>
        </div>
      </div>

      {/* Geeks for Geeks */}
      <div className="flex flex-col items-center gap-5">
        <p className="text-4xl">Geeks for Geeks</p>
        <img src={geeksforgeeks} alt="leetcode" className="h-64 object-contain" />

        <div className="flex gap-10">
          <span className="text-2xl flex-wrap">School: 0</span>
          <span className="text-2xl flex-wrap">Basic: 1</span>
          <span className="text-2xl flex-wrap">Easy: 3</span>
          <span className="text-2xl flex-wrap">Medium: 3</span>
          <span className="text-2xl flex-wrap">Hard: 0</span>
        </div>
      </div>

      {/* Codeforces */}
      <div className="flex flex-col items-center gap-5">
        <p className="text-4xl">Codeforces</p>
        <img src={codeforces} alt="leetcode" className="h-64 object-contain" />
      </div>
    </div>
  )
}