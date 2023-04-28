import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCactusOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCactusOffIcon = React.forwardRef<SVGSVGElement, TablerCactusOffIconProps>(
	function TablerCactusOffIcon(props, ref) {
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
				<path d="M6 9v1a3 3 0 0 0 3 3h1" />
				<path d="M18 8v5a3 3 0 0 1 -.129 .872m-2.014 2a3 3 0 0 1 -.857 .124h-1" />
				<path d="M10 21v-11m0 -4v-1a2 2 0 1 1 4 0v5m0 4v7" />
				<path d="M7 21h10" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerCactusOffIcon.displayName = "TablerCactusOffIcon";
}
