import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCogIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCogIcon = React.forwardRef<SVGSVGElement, TablerCogIconProps>(function TablerCogIcon(props, ref) {
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
			<path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
			<path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
			<path d="M12 2v2" />
			<path d="M12 22v-2" />
			<path d="m17 20.66-1-1.73" />
			<path d="M11 10.27 7 3.34" />
			<path d="m20.66 17-1.73-1" />
			<path d="m3.34 7 1.73 1" />
			<path d="M14 12h8" />
			<path d="M2 12h2" />
			<path d="m20.66 7-1.73 1" />
			<path d="m3.34 17 1.73-1" />
			<path d="m17 3.34-1 1.73" />
			<path d="m11 13.73-4 6.93" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCogIcon.displayName = "TablerCogIcon";
}
