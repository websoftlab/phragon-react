import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerYinYangIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerYinYangIcon = React.forwardRef<SVGSVGElement, TablerYinYangIconProps>(function TablerYinYangIcon(
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
			<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
			<path d="M12 3a4.5 4.5 0 0 0 0 9a4.5 4.5 0 0 1 0 9" />
			<path d="M11.5,7.5a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
			<path d="M11.5,16.5a.5,.5 0 1,0 1,0a.5,.5 0 1,0 -1,0" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerYinYangIcon.displayName = "TablerYinYangIcon";
}
