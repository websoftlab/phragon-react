import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLollipopOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLollipopOffIcon = React.forwardRef<SVGSVGElement, TablerLollipopOffIconProps>(
	function TablerLollipopOffIcon(props, ref) {
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
				<path d="M7.462 7.493a7 7 0 0 0 9.06 9.039m2.416 -1.57a7 7 0 1 0 -9.884 -9.915" />
				<path d="M21 10a3.5 3.5 0 0 0 -7 0" />
				<path d="M12.71 12.715a3.5 3.5 0 0 1 -5.71 -2.715" />
				<path d="M14 17c.838 0 1.607 -.294 2.209 -.785m1.291 -2.715a3.5 3.5 0 0 0 -3.5 -3.5" />
				<path d="M14 3a3.5 3.5 0 0 0 -3.5 3.5" />
				<path d="M3 21l6 -6" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerLollipopOffIcon.displayName = "TablerLollipopOffIcon";
}
