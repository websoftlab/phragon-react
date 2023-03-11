import React from "react";
export function Text(props: { text: string; isHtml: boolean }) {
	const { isHtml = false, text } = props;
	if (isHtml) {
		return <div dangerouslySetInnerHTML={{ __html: text }} />;
	} else {
		return <>{text}</>;
	}
}
