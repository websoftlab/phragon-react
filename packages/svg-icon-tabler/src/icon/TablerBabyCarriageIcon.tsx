import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBabyCarriageIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBabyCarriageIcon = React.forwardRef<SVGSVGElement, TablerBabyCarriageIconProps>(
	function TablerBabyCarriageIcon(props, ref) {
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
				<path d="M8 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M18 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M2 5h2.5l1.632 4.897a6 6 0 0 0 5.693 4.103h2.675a5.5 5.5 0 0 0 0 -11h-.5v6" />
				<path d="M6 9h14" />
				<path d="M9 17l1 -3" />
				<path d="M16 14l1 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBabyCarriageIcon.displayName = "TablerBabyCarriageIcon";
}
