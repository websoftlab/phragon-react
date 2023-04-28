import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRuler2OffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRuler2OffIcon = React.forwardRef<SVGSVGElement, TablerRuler2OffIconProps>(
	function TablerRuler2OffIcon(props, ref) {
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
				<path d="M12.03 7.97l4.97 -4.97l4 4l-5 5m-2 2l-7 7l-4 -4l7 -7" />
				<path d="M16 7l-1.5 -1.5" />
				<path d="M10 13l-1.5 -1.5" />
				<path d="M7 16l-1.5 -1.5" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRuler2OffIcon.displayName = "TablerRuler2OffIcon";
}
