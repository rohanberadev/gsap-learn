import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
    return (
        <div className="h-[100vh] flex-center">
            <h1 className="text-indigo-300 text-3xl">Hello, GSAP!</h1>
        </div>
    );
}
