import React from "react";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="grid grid-cols-8 gap-15">
        {/* ستون 1 */}
        <div className="flex flex-col space-y-2 ">
          <div className="border p-4 text-center">26</div>
          <div className="border p-4 text-center">27</div>
          <div className="border p-4 text-center">28</div>
          <div className="border p-4 text-center">29</div>
          <div className="border p-4 text-center">30</div>
        </div>

        <div className="col-span-2"></div>

        {/* ستون 2 */}
        <div className="flex flex-col space-y-2">
          <div className="border p-4 text-center">25</div>
          <div className="border p-4 text-center">24</div>
          <div className="border p-4 text-center">23</div>
          <div className="border p-4 text-center">22</div>
          <div className="border p-4 text-center">21</div>
        </div>

        <div className="flex flex-col space-y-2">
          <div className="border p-4 text-center">5</div>
          <div className="border p-4 text-center">4</div>
          <div className="border p-4 text-center">3</div>
          <div className="border p-4 text-center">2</div>
          <div className="border p-4 text-center">1</div>
        </div>

        <div className="col-span-2"></div>

        {/* ستون 3 */}
        <div className="flex flex-col space-y-2">
          <div className="border p-4 text-center">6</div>
          <div className="border p-4 text-center">7</div>
          <div className="border p-4 text-center">8</div>
          <div className="border p-4 text-center">9</div>
          <div className="border p-4 text-center">10</div>
        </div>

        <div className="col-span-4"></div>

        {/* ستون 4 */}
        <div className="flex flex-col space-y-2">
          <div className="border p-4 text-center">11</div>
          <div className="border p-4 text-center">12</div>
          <div className="border p-4 text-center">13</div>
          <div className="border p-4 text-center">14</div>
          <div className="border p-4 text-center">15</div>
        </div>

        <div className="col-span-2"></div>

        {/* ستون 5 */}
        <div className="flex flex-col space-y-2">
          <div className="border p-4 text-center">20</div>
          <div className="border p-4 text-center">19</div>
          <div className="border p-4 text-center">18</div>
          <div className="border p-4 text-center">17</div>
          <div className="border p-4 text-center">16</div>
        </div>
      </div>
    </div>
  );
}
