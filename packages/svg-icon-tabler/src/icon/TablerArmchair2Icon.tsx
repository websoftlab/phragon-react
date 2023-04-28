import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerArmchair2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerArmchair2Icon = React.forwardRef<SVGSVGElement, TablerArmchair2IconProps>(
	function TablerArmchair2Icon(props, ref) {
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
				<path d="M5 10v-4a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v4" />
				<path d="M16 15v-2a3 3 0 1 1 3 3v3h-14v-3a3 3 0 1 1 3 -3v2" />
				<path d="M8 12h8" />
				<path d="M7 19v2" />
				<path d="M17 19v2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerArmchair2Icon.displayName = "TablerArmchair2Icon";
}
