import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBrandBeatsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBrandBeatsIcon = React.forwardRef<SVGSVGElement, TablerBrandBeatsIconProps>(
	function TablerBrandBeatsIcon(props, ref) {
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
				<path d="M12.5 12.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
				<path d="M9 12v-8" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerBrandBeatsIcon.displayName = "TablerBrandBeatsIcon";
}
