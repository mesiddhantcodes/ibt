import React from "react";

interface DividerProps {
    color?: string;
    borderStyle?: "solid" | "dashed" | "dotted";
    borderWidth?: string;
    margin?: string;
}

export default function Divider({
    color = "#39DFCB",
    borderStyle = "solid",
    borderWidth = "12px",
    margin = "2rem 0"
}: DividerProps) {
    return (
        <div
            style={{
                borderTop: `${borderWidth} ${borderStyle} ${color}`,
                margin: margin,
                width: "100%",
            }}
        />
    );
}
