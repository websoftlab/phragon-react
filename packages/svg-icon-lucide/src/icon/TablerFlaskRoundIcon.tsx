import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFlaskRoundIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFlaskRoundIcon = React.forwardRef<SVGSVGElement, TablerFlaskRoundIconProps>(
	function TablerFlaskRoundIcon(props, ref) {
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
				<path d="M10 2v7.31" />
				<path d="M14 9.3V1.99" />
				<path d="M8.5 2h7" />
				<path d="M14 9.3a6.5 6.5 0 1 1-4 0" />
				<path d="M5.52 16h12.96" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFlaskRoundIcon.displayName = "TablerFlaskRoundIcon";
}
