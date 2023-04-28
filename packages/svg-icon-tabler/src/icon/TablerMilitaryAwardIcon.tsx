import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMilitaryAwardIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMilitaryAwardIcon = React.forwardRef<SVGSVGElement, TablerMilitaryAwardIconProps>(
	function TablerMilitaryAwardIcon(props, ref) {
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
				<path d="M12 13m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
				<path d="M8.5 10.5l-1 -2.5h-5.5l2.48 5.788a2 2 0 0 0 1.84 1.212h2.18" />
				<path d="M15.5 10.5l1 -2.5h5.5l-2.48 5.788a2 2 0 0 1 -1.84 1.212h-2.18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerMilitaryAwardIcon.displayName = "TablerMilitaryAwardIcon";
}
