import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBallTennisIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBallTennisIcon = React.forwardRef<SVGSVGElement, TablerBallTennisIconProps>(
	function TablerBallTennisIcon(props, ref) {
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
				<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
				<path d="M6 5.3a9 9 0 0 1 0 13.4" />
				<path d="M18 5.3a9 9 0 0 0 0 13.4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBallTennisIcon.displayName = "TablerBallTennisIcon";
}
