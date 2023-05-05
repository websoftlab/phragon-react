import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerUnfoldHorizontalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerUnfoldHorizontalIcon = React.forwardRef<SVGSVGElement, TablerUnfoldHorizontalIconProps>(
	function TablerUnfoldHorizontalIcon(props, ref) {
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
				<path d="M16 12h6" />
				<path d="M8 12H2" />
				<path d="M12 2v2" />
				<path d="M12 8v2" />
				<path d="M12 14v2" />
				<path d="M12 20v2" />
				<path d="m19 15 3-3-3-3" />
				<path d="m5 9-3 3 3 3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerUnfoldHorizontalIcon.displayName = "TablerUnfoldHorizontalIcon";
}
