import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFoldHorizontalIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFoldHorizontalIcon = React.forwardRef<SVGSVGElement, TablerFoldHorizontalIconProps>(
	function TablerFoldHorizontalIcon(props, ref) {
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
				<path d="M2 12h6" />
				<path d="M22 12h-6" />
				<path d="M12 2v2" />
				<path d="M12 8v2" />
				<path d="M12 14v2" />
				<path d="M12 20v2" />
				<path d="m19 9-3 3 3 3" />
				<path d="m5 15 3-3-3-3" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerFoldHorizontalIcon.displayName = "TablerFoldHorizontalIcon";
}
