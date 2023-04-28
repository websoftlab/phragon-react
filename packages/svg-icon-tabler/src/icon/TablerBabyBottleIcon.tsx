import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBabyBottleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBabyBottleIcon = React.forwardRef<SVGSVGElement, TablerBabyBottleIconProps>(
	function TablerBabyBottleIcon(props, ref) {
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
				<path d="M5 10h14" />
				<path d="M12 2v2" />
				<path d="M12 4a5 5 0 0 1 5 5v11a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-11a5 5 0 0 1 5 -5z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBabyBottleIcon.displayName = "TablerBabyBottleIcon";
}
