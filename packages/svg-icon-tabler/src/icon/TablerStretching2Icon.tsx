import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerStretching2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerStretching2Icon = React.forwardRef<SVGSVGElement, TablerStretching2IconProps>(
	function TablerStretching2Icon(props, ref) {
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
				<path d="M11 4a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
				<path d="M6.5 21l3.5 -5" />
				<path d="M5 11l7 -2" />
				<path d="M16 21l-4 -7v-5l7 -4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerStretching2Icon.displayName = "TablerStretching2Icon";
}
