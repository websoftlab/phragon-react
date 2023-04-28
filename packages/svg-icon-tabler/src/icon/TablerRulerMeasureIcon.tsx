import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRulerMeasureIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRulerMeasureIcon = React.forwardRef<SVGSVGElement, TablerRulerMeasureIconProps>(
	function TablerRulerMeasureIcon(props, ref) {
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
				<path d="M19.875 12c.621 0 1.125 .512 1.125 1.143v5.714c0 .631 -.504 1.143 -1.125 1.143h-15.875a1 1 0 0 1 -1 -1v-5.857c0 -.631 .504 -1.143 1.125 -1.143h15.75z" />
				<path d="M9 12v2" />
				<path d="M6 12v3" />
				<path d="M12 12v3" />
				<path d="M18 12v3" />
				<path d="M15 12v2" />
				<path d="M3 3v4" />
				<path d="M3 5h18" />
				<path d="M21 3v4" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRulerMeasureIcon.displayName = "TablerRulerMeasureIcon";
}
