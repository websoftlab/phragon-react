import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAugmentedRealityIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAugmentedRealityIcon = React.forwardRef<SVGSVGElement, TablerAugmentedRealityIconProps>(
	function TablerAugmentedRealityIcon(props, ref) {
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
				<path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
				<path d="M4 16v2a2 2 0 0 0 2 2h2" />
				<path d="M16 4h2a2 2 0 0 1 2 2v2" />
				<path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
				<path d="M12 12.5l4 -2.5" />
				<path d="M8 10l4 2.5v4.5l4 -2.5v-4.5l-4 -2.5z" />
				<path d="M8 10v4.5l4 2.5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAugmentedRealityIcon.displayName = "TablerAugmentedRealityIcon";
}
