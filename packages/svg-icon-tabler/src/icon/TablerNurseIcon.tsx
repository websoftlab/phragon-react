import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerNurseIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerNurseIcon = React.forwardRef<SVGSVGElement, TablerNurseIconProps>(function TablerNurseIcon(
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
			<path d="M12 6c2.941 0 5.685 .847 8 2.31l-2 9.69h-12l-2 -9.691a14.93 14.93 0 0 1 8 -2.309z" />
			<path d="M10 12h4" />
			<path d="M12 10v4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerNurseIcon.displayName = "TablerNurseIcon";
}
