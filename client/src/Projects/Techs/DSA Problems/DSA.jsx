// Importing local files
import './Styles.css'
import data from '../../../Data/api.json'
import Footer from "./Footer";
import Achievements from './Achievements';

export default function DSA() {
  return (
    <div id='body' className="w-lvw min-h-lvh">
      {/* Header */}
      <div id='header'>
        <h1>My DSA Problems</h1>
      </div>

      {/* Main */}
      <div id='main'>
        <h1>Topics</h1>
        <ul>
          <li id="array">Array 30%</li>
          <li id="matrix">Matrix 0%</li>
          <li id="strings">Strings 30%</li>
          <li id="searching-sorting">Searching and Sorting 30%</li>
          <li id="LL">Linked List 20%</li>
          <li id="BM">Bit Manipulation 0%</li>
          <li id="greedy">Greedy 0%</li>
          <li id="backtracking">Backtracking 0%</li>
          <li id="dp">Dynamic Programming 0%</li>
          <li id="stacks-queues">stacks and Queues 0%</li>
          <li id="bt">Binary Trees 0%</li>
          <li id="bst">Binary Search Tree 0%</li>
          <li id="graphs">Graphs 0%</li>
          <li id="heap">Heap 0%</li>
          <li id="trie">Trie 0%</li>
        </ul>
      </div>

      <Achievements />

      {/* footer */}
      <Footer data={data} />
    </div>
  )
}