import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMarkdownOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMarkdownOffIcon = React.forwardRef<SVGSVGElement, TablerMarkdownOffIconProps>(
	function TablerMarkdownOffIcon(props, ref) {
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
				<path d="M9 5h10a2 2 0 0 1 2 2v10" />
				<path d="M19 19h-14a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 1.85 -2" />
				<path d="M7 15v-6l2 2l1 -1m1 1v4" />
				<path d="M17.5 13.5l.5 -.5m-2 -1v-3" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMarkdownOffIcon.displayName = "TablerMarkdownOffIcon";
}
