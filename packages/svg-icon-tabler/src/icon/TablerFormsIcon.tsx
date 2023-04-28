import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerFormsIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerFormsIcon = React.forwardRef<SVGSVGElement, TablerFormsIconProps>(function TablerFormsIcon(
	props,
	ref
) {
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
			<path d="M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3" />
			<path d="M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3" />
			<path d="M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7" />
			<path d="M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1" />
			<path d="M17 12h.01" />
			<path d="M13 12h.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerFormsIcon.displayName = "TablerFormsIcon";
}
