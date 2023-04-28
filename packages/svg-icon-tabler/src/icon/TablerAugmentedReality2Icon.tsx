import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAugmentedReality2IconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAugmentedReality2Icon = React.forwardRef<SVGSVGElement, TablerAugmentedReality2IconProps>(
	function TablerAugmentedReality2Icon(props, ref) {
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
				<path d="M10 21h-2a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v3.5" />
				<path d="M17 17l-4 -2.5l4 -2.5l4 2.5v4.5l-4 2.5z" />
				<path d="M13 14.5v4.5l4 2.5" />
				<path d="M17 17l4 -2.5" />
				<path d="M11 4h2" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAugmentedReality2Icon.displayName = "TablerAugmentedReality2Icon";
}
