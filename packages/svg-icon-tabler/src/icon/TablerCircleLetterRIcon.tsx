import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCircleLetterRIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCircleLetterRIcon = React.forwardRef<SVGSVGElement, TablerCircleLetterRIconProps>(
	function TablerCircleLetterRIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M10 12h2a2 2 0 1 0 0 -4h-2v8m4 0l-3 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCircleLetterRIcon.displayName = "TablerCircleLetterRIcon";
}
