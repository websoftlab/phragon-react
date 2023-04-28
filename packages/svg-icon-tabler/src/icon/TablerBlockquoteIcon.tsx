import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBlockquoteIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBlockquoteIcon = React.forwardRef<SVGSVGElement, TablerBlockquoteIconProps>(
	function TablerBlockquoteIcon(props, ref) {
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
				<path d="M6 15h15" />
				<path d="M21 19h-15" />
				<path d="M15 11h6" />
				<path d="M21 7h-6" />
				<path d="M9 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
				<path d="M3 9h1a1 1 0 1 1 -1 1v-2.5a2 2 0 0 1 2 -2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBlockquoteIcon.displayName = "TablerBlockquoteIcon";
}
