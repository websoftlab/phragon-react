import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerGenderNeutroisIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerGenderNeutroisIcon = React.forwardRef<SVGSVGElement, TablerGenderNeutroisIconProps>(
	function TablerGenderNeutroisIcon(props, ref) {
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
				<path d="M12 10a5 5 0 1 1 0 10a5 5 0 0 1 0 -10z" />
				<path d="M12 10v-7" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerGenderNeutroisIcon.displayName = "TablerGenderNeutroisIcon";
}
