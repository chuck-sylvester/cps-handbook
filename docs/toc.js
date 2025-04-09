// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="00_intro/introduction.html">Introduction</a></li><li class="chapter-item expanded "><a href="01_git/git_for_people.html"><strong aria-hidden="true">1.</strong> Git for People</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="01_git/getting_started.html"><strong aria-hidden="true">1.1.</strong> Getting Started</a></li><li class="chapter-item expanded "><a href="01_git/git_branches.html"><strong aria-hidden="true">1.2.</strong> Working with Branches</a></li><li class="chapter-item expanded "><a href="01_git/git_flow.html"><strong aria-hidden="true">1.3.</strong> Git Flow</a></li></ol></li><li class="chapter-item expanded "><a href="02_cpp/cpp_for_people.html"><strong aria-hidden="true">2.</strong> C++ for People</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="02_cpp/getting_started.html"><strong aria-hidden="true">2.1.</strong> Getting Started</a></li></ol></li><li class="chapter-item expanded "><a href="03_java/java_for_people.html"><strong aria-hidden="true">3.</strong> Java for People</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="03_java/getting_started.html"><strong aria-hidden="true">3.1.</strong> Getting Started</a></li><li class="chapter-item expanded "><a href="03_java/writing_code.html"><strong aria-hidden="true">3.2.</strong> Writing Code</a></li><li class="chapter-item expanded "><a href="03_java/compiling_code.html"><strong aria-hidden="true">3.3.</strong> Compiling Code</a></li><li class="chapter-item expanded "><a href="03_java/build_tools.html"><strong aria-hidden="true">3.4.</strong> Build Tools</a></li></ol></li><li class="chapter-item expanded "><a href="04_lamp/lamp_for_people.html"><strong aria-hidden="true">4.</strong> LAMP for People</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="04_lamp/getting_started.html"><strong aria-hidden="true">4.1.</strong> Getting Started</a></li></ol></li><li class="chapter-item expanded "><a href="05_rust/rust_for_people.html"><strong aria-hidden="true">5.</strong> Rust for People</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="05_rust/subsection_two.html"><strong aria-hidden="true">5.1.</strong> Rust Sub Section 2</a></li></ol></li><li class="chapter-item expanded "><a href="06_python/python_for_people.html"><strong aria-hidden="true">6.</strong> Python for People</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="06_python/getting_started.html"><strong aria-hidden="true">6.1.</strong> Getting Started</a></li></ol></li><li class="chapter-item expanded "><a href="07_jlv/jlv_dev_setup.html"><strong aria-hidden="true">7.</strong> JLV Dev Setup</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="07_jlv/java_setup.html"><strong aria-hidden="true">7.1.</strong> Java Setup</a></li><li class="chapter-item expanded "><a href="07_jlv/apache_tomcat.html"><strong aria-hidden="true">7.2.</strong> Apache Tomcat</a></li><li class="chapter-item expanded "><a href="07_jlv/apache_groovy.html"><strong aria-hidden="true">7.3.</strong> Apache Groovy</a></li><li class="chapter-item expanded "><a href="07_jlv/node_setup.html"><strong aria-hidden="true">7.4.</strong> Node</a></li><li class="chapter-item expanded "><a href="07_jlv/source_code.html"><strong aria-hidden="true">7.5.</strong> Source Code</a></li><li class="chapter-item expanded "><a href="07_jlv/environment.html"><strong aria-hidden="true">7.6.</strong> Environment</a></li><li class="chapter-item expanded "><a href="07_jlv/build_deploy.html"><strong aria-hidden="true">7.7.</strong> Build and Deploy</a></li></ol></li><li class="chapter-item expanded "><a href="08_mcode/mcode_for_people.html"><strong aria-hidden="true">8.</strong> mCODE for People</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="08_mcode/getting_started.html"><strong aria-hidden="true">8.1.</strong> Getting Started</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
