import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerAccessibleOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerAccessibleOffIcon = React.forwardRef<SVGSVGElement, TablerAccessibleOffIconProps>(
	function TablerAccessibleOffIcon(props, ref) {
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
				<path d="M10 16.5l2 -3l2 3m-2 -3v-1.5m2.627 -1.376l.373 -.124m-6 0l2.231 .744" />
				<path d="M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73" />
				<path d="M12 8a.5 .5 0 1 0 -.5 -.5" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerAccessibleOffIcon.displayName = "TablerAccessibleOffIcon";
}
