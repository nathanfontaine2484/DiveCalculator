# Dive Calculator

This project is a simple web tool that demonstrates no-decompression limits using data from the U.S. Navy Diving Manual. The calculator displays a table of depths and remaining dive times with a timer for live updates. It is intended **solely for educational purposes** and should not be used as a substitute for real dive planning software or professional instruction.

## How to Use
1. Open `dive.html` in a modern web browser. You can do this by double-clicking the file or serving it via a local web server.
2. Select the desired depth from the drop-down menu and press **Start** to begin the timer. Press **Stop** to end the dive and view a summary of the dive log.

## Main Files
- **dive.html** – The main page containing the interface, timer logic, and a disclaimer.
- **diveData.js** – Provides the no-decompression limit data and repetitive group designation tables used by the page.
- **diveStyles.css** – Stylesheet for layout, colors, and responsive design.

The **PDFDATA** directory contains reference material used while creating this demo:
- `DECOMPRESSION STOPS.pdf`
- `No Deco limits.pdf`
- `shallow water.pdf`

These PDFs are included for reference only.

## Disclaimer
This tool is provided for informational and educational use only. Always consult official dive tables, decompression software, and qualified professionals when planning real-world dives.
