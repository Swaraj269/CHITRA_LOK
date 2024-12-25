import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

function Loader() {
  const loaderref = useRef();
  useGSAP(() => {
    gsap.to(loaderref.current, {
      duration: 2,
      width: "100%",
      ease: "elastic.out(1, 0.3)",
    });
  });
  return (
    <div className="h-screen w-full bg-[#101010] flex items-center justify-center">
      <div className="loader w-fit">
        <div className="loaderimg">
          <svg
            width="335.05333862304684"
            height="41.896215246253306"
            viewBox="0 0 287.899995728334 36"
            className="looka-1j8o68f w-36 md:w-44 lg:w-60"
          >
            <defs id="SvgjsDefs4683"></defs>
            <g
              id="SvgjsG4684"
              featurekey="nameLeftFeature-0"
              transform="matrix(2.500000066227385,0,0,2.500000066227385,-2.249999105930305,-14.500003245141858)"
              fill="#ffffff"
            >
              <path d="M12.96 18.5 c-1.24 1.12 -2.9 1.7 -4.76 1.7 c-3.92 0 -7.3 -2.94 -7.3 -7.2 s3.38 -7.2 7.3 -7.2 c1.84 0 3.48 0.6 4.68 1.66 l-1.76 1.98 c-0.74 -0.52 -1.74 -0.9 -2.76 -0.9 c-2.52 0 -4.42 1.86 -4.42 4.46 s1.9 4.46 4.42 4.46 c1.06 0 2.1 -0.4 2.86 -1 z M23.42 6 l2.92 0 l0 14 l-2.92 0 l0 -5.66 l-5.64 0 l0 5.66 l-2.92 0 l0 -14 l2.92 0 l0 5.66 l5.64 0 l0 -5.66 z M31.66 6 l0 14 l-2.92 0 l0 -14 l2.92 0 z M43.56 6 l0 2.68 l-3.48 0 l0 11.32 l-2.92 0 l0 -11.32 l-3.5 0 l0 -2.68 l9.9 0 z M56.58 20 l-3.1 0 l-2.98 -4.66 l-0.04 0 l-1.98 0 l0 4.66 l-2.92 0 l0 -14 l4.9 0 c3.14 0 5.18 1.9 5.18 4.76 c0 1.9 -0.92 3.32 -2.48 4.04 z M48.48 8.68 l0 4.14 l1.8 0 c1.44 0 2.44 -0.56 2.44 -2.06 c0 -1.48 -1 -2.08 -2.44 -2.08 l-1.8 0 z"></path>
            </g>
            <g
              id="SvgjsG4685"
              featurekey="inlineSymbolFeature-0"
              transform="matrix(0.5329057972831313,0,0,0.5329057972831313,137.60566355388437,-7.460600863429472)"
              fill="#ffffff"
            >
              <g xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M82.198,70.004H50.021v-34.64h6.557l-2.958-2.887h-3.599V28.97l-5.279-5.152H11.999v57.736h73.119V63.221l-2.92-2.854    V70.004z M14.928,32.478v-5.775h5.844v5.775H14.928z M23.701,32.478v-5.775h5.851v5.775H23.701z M32.473,32.478v-5.775h5.851    v5.775H32.473z M41.247,32.478v-5.775H47.1v5.775H41.247z M14.928,70.004v-34.64H47.1v34.64H14.928z M82.198,72.895v5.775h-5.854    v-5.775H82.198z M73.423,72.895v5.775h-5.85v-5.775H73.423z M64.646,72.895v5.775h-5.853v-5.775H64.646z M55.873,72.895v5.775    h-5.853v-5.775H55.873z M47.1,72.895v5.775h-5.853v-5.775H47.1z M38.323,72.895v5.775h-5.851v-5.775H38.323z M29.552,72.895v5.775    h-5.851v-5.775H29.552z M20.771,72.895v5.775h-5.844v-5.775H20.771z"></path>
                  <rect
                    x="17.788"
                    y="37.914"
                    width="27.301"
                    height="29.94"
                  ></rect>
                  <polyline points="52.447,43.704 52.447,67.854 79.749,67.854 70.499,52.578   "></polyline>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M73.842,29.31c-0.766,0.012-1.358,0.724-1.339,1.561    c0.014,0.837,0.633,1.531,1.396,1.509c0.736-0.009,1.333-0.721,1.319-1.562C75.201,29.98,74.587,29.287,73.842,29.31z     M81.438,16.663c-2.066,0.041-3.718,1.973-3.679,4.316c0.045,2.335,1.769,4.208,3.827,4.173c2.092-0.044,3.726-1.986,3.683-4.314    C85.221,18.495,83.516,16.616,81.438,16.663z M81.791,36.481c-2.062,0.042-3.721,1.971-3.673,4.311    c0.035,2.348,1.768,4.199,3.832,4.164c2.076-0.038,3.711-1.964,3.676-4.31C85.583,38.301,83.873,36.451,81.791,36.481z     M81.994,47.631c-3.383,0.066-6.172-2.977-6.235-6.792c-0.045-2.036,0.684-3.863,1.906-5.144L73.7,33.377L58.644,43.693    c-2.249,1.273-4.535,0.407-6.854-1.285l17.854-11.419L51.397,20.233c2.247-1.771,4.51-2.726,6.798-1.547l15.413,9.749l3.794-2.431    c-1.212-1.247-1.964-3.015-2.005-4.991c-0.067-3.792,2.606-6.946,5.992-7.012c3.379-0.069,6.186,2.983,6.252,6.778    c0.071,3.758-2.539,6.868-5.854,7.027l-4.394,3.03l4.734,2.987c3.207,0.146,5.807,3.104,5.869,6.779    C88.074,44.413,85.38,47.56,81.994,47.631z"
                  ></path>
                </g>
              </g>
            </g>
            <g
              id="SvgjsG4686"
              featurekey="nameRightFeature-0"
              transform="matrix(2.4999999006589295,0,0,2.4999999006589295,187.00000059604642,-14.499999900658931)"
              fill="#ffffff"
            >
              <path d="M4.12 17.32 l5.5 0 l0 2.68 l-8.42 0 l0 -14 l2.92 0 l0 11.32 z M18.58 5.800000000000001 c3.9 0 7.26 2.94 7.26 7.2 s-3.36 7.2 -7.26 7.2 s-7.26 -2.94 -7.26 -7.2 s3.36 -7.2 7.26 -7.2 z M18.58 17.46 c2.36 0 4.22 -1.86 4.22 -4.46 s-1.86 -4.46 -4.22 -4.46 s-4.22 1.86 -4.22 4.46 s1.86 4.46 4.22 4.46 z M37 20 l-4.34 -6 l-1.72 1.96 l0 4.04 l-3 0 l0 -14 l3 0 l0 6.1 l5.18 -6.1 l3.6 0 l-5.26 5.96 l5.9 8.04 l-3.36 0 z"></path>
            </g>
          </svg>
        </div>
        <div
          ref={loaderref}
          className="loaderline mt-1 w-0 h-1 bg-white "
        ></div>
      </div>
    </div>
  );
}

export default Loader;
