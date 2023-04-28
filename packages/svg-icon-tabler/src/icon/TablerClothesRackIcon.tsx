import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClothesRackIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClothesRackIcon = React.forwardRef<SVGSVGElement, TablerClothesRackIconProps>(
	function TablerClothesRackIcon(props, ref) {
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
				<path d="M12 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M12 7v14" />
				<path d="M9 21h6" />
				<path d="M7.757 9.243a6 6 0 0 0 8.486 0" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerClothesRackIcon.displayName = "TablerClothesRackIcon";
}
