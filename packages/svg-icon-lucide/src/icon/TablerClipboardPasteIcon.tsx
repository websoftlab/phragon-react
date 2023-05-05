import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClipboardPasteIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClipboardPasteIcon = React.forwardRef<SVGSVGElement, TablerClipboardPasteIconProps>(
	function TablerClipboardPasteIcon(props, ref) {
		const { children, ...rest } = props;
		return (
			<SvgIcon
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...rest}
				ref={ref}
				size={24}
				icon={undefined}
				fill="none"
			>
				<path d="M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z" />
				<path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10" />
				<path d="m17 10 4 4-4 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerClipboardPasteIcon.displayName = "TablerClipboardPasteIcon";
}
