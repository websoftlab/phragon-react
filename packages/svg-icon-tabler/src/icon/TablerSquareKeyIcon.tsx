import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSquareKeyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSquareKeyIcon = React.forwardRef<SVGSVGElement, TablerSquareKeyIconProps>(
	function TablerSquareKeyIcon(props, ref) {
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
				<path d="M14 10m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
				<path d="M12.5 11.5l-4 4l1.5 1.5" />
				<path d="M12 15l-1.5 -1.5" />
				<path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerSquareKeyIcon.displayName = "TablerSquareKeyIcon";
}
