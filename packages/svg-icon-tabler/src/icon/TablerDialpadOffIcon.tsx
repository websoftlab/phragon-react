import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerDialpadOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerDialpadOffIcon = React.forwardRef<SVGSVGElement, TablerDialpadOffIconProps>(
	function TablerDialpadOffIcon(props, ref) {
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
				<path d="M7 7h-4v-4" />
				<path d="M17 3h4v4h-4z" />
				<path d="M10 6v-3h4v4h-3" />
				<path d="M3 10h4v4h-4z" />
				<path d="M17 13v-3h4v4h-3" />
				<path d="M14 14h-4v-4" />
				<path d="M10 17h4v4h-4z" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerDialpadOffIcon.displayName = "TablerDialpadOffIcon";
}
