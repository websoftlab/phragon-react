import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerHelmetOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerHelmetOffIcon = React.forwardRef<SVGSVGElement, TablerHelmetOffIconProps>(
	function TablerHelmetOffIcon(props, ref) {
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
				<path d="M8.633 4.654a9 9 0 0 1 11.718 11.7m-1.503 2.486a9.008 9.008 0 0 1 -1.192 1.16h-11.312a9 9 0 0 1 -.185 -13.847" />
				<path d="M20 9h-7m-2.768 1.246c.507 2 1.596 3.418 3.268 4.254c.524 .262 1.07 .49 1.64 .683" />
				<path d="M3 3l18 18" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerHelmetOffIcon.displayName = "TablerHelmetOffIcon";
}
