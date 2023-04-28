import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPolygonOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPolygonOffIcon = React.forwardRef<SVGSVGElement, TablerPolygonOffIconProps>(
	function TablerPolygonOffIcon(props, ref) {
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
				<path d="M19 8m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M5 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M15 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M6.5 9.5l1.546 -1.311" />
				<path d="M14 5.5l3 1.5" />
				<path d="M18.5 10l-1.185 3.318m-1.062 2.972l-.253 .71" />
				<path d="M13.5 17.5l-7 -5" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerPolygonOffIcon.displayName = "TablerPolygonOffIcon";
}
