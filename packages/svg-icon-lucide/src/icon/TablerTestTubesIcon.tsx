import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTestTubesIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTestTubesIcon = React.forwardRef<SVGSVGElement, TablerTestTubesIconProps>(
	function TablerTestTubesIcon(props, ref) {
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
				<path d="M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2" />
				<path d="M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2" />
				<path d="M3 2h7" />
				<path d="M14 2h7" />
				<path d="M9 16H4" />
				<path d="M20 16h-5" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerTestTubesIcon.displayName = "TablerTestTubesIcon";
}
