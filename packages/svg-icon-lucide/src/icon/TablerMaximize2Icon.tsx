import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMaximize2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMaximize2Icon = React.forwardRef<SVGSVGElement, TablerMaximize2IconProps>(
	function TablerMaximize2Icon(props, ref) {
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
				<path d="M15 3 L21 3 L21 9" />
				<path d="M9 21 L3 21 L3 15" />
				<path d="M21 3 L14 10" />
				<path d="M3 21 L10 14" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMaximize2Icon.displayName = "TablerMaximize2Icon";
}
