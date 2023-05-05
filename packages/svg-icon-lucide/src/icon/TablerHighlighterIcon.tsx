import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHighlighterIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHighlighterIcon = React.forwardRef<SVGSVGElement, TablerHighlighterIconProps>(
	function TablerHighlighterIcon(props, ref) {
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
				<path d="m9 11-6 6v3h9l3-3" />
				<path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHighlighterIcon.displayName = "TablerHighlighterIcon";
}
